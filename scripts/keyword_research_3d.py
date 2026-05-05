#!/usr/bin/env python3
"""
Keyword research pour le marché de l'impression 3D en France via DataForSEO.

Étapes :
  1. Vérifier les volumes mensuels sur la liste de seeds (search_volume/live)
  2. Expanser via keywords_for_keywords/live (volume > 50, top 100)
  3. Exporter 3 CSV horodatés : seeds_volumes, ideas_expanded, opportunites

Usage :
    export DATAFORSEO_LOGIN="..."
    export DATAFORSEO_PASSWORD="..."
    python3 scripts/keyword_research_3d.py
"""

from __future__ import annotations

import csv
import json
import logging
import os
import sys
import time
from datetime import datetime
from typing import Any, Iterable

import requests

# ---------------------------------------------------------------------------
# Configuration
# ---------------------------------------------------------------------------

API_BASE = "https://api.dataforseo.com"
LOCATION_CODE = 2250          # France
LANGUAGE_CODE = "fr"
BATCH_SIZE = 100              # max 1000 selon la doc, 100 reste prudent
MAX_RETRIES = 3
RETRY_BACKOFF_SECONDS = 2     # backoff exponentiel : 2s, 4s, 8s
IDEAS_VOLUME_FILTER = 50      # filtre étape 2
OPPORTUNITES_VOLUME_FILTER = 100  # filtre fusion finale
IDEAS_LIMIT_PER_GROUP = 100
TIMEOUT_SECONDS = 60

TIMESTAMP = datetime.now().strftime("%Y%m%d_%H%M%S")
OUTPUT_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "output")
ERRORS_LOG = os.path.join(OUTPUT_DIR, "errors.log")

# ---------------------------------------------------------------------------
# Logging
# ---------------------------------------------------------------------------

os.makedirs(OUTPUT_DIR, exist_ok=True)

logging.basicConfig(
    filename=ERRORS_LOG,
    level=logging.ERROR,
    format="%(asctime)s [%(levelname)s] %(message)s",
)
logger = logging.getLogger("keyword_research_3d")


def log_progress(msg: str) -> None:
    """Affiche la progression dans le terminal avec timestamp."""
    print(f"[{datetime.now().strftime('%H:%M:%S')}] {msg}", flush=True)


# ---------------------------------------------------------------------------
# Seeds : étape 1 (volumes)
# ---------------------------------------------------------------------------

SEED_KEYWORDS: list[str] = [
    # Cluster 1 — Service général
    "impression 3d service",
    "impression 3d à la demande",
    "impression 3d en ligne",
    "impression 3d sur mesure",
    "devis impression 3d",
    "impression 3d rapide",
    "fabrication additive service",
    "impression 3d professionnel",
    "sous-traitance impression 3d",
    "prestataire impression 3d",

    # Cluster 2 — Prototypage
    "prototypage rapide impression 3d",
    "prototype plastique rapide",
    "prototypage pièce mécanique",
    "fabrication prototype industriel",
    "prototype fonctionnel impression 3d",
    "prototypage pme",
    "impression 3d prototype ingénierie",

    # Cluster 3 — Pièces mécaniques
    "impression 3d pièce mécanique",
    "pièce technique impression 3d",
    "impression 3d pièce fonctionnelle",
    "pièce de rechange impression 3d",
    "pièce plastique sur mesure",
    "impression 3d pièce industrielle",
    "fabrication pièce plastique petite série",
    "pièce sur mesure plastique",

    # Cluster 4 — Automobile / moto
    "impression 3d pièce auto",
    "pièce automobile impression 3d",
    "pièce moto impression 3d",
    "support impression 3d voiture",
    "pièce intérieur voiture impression 3d",
    "carrosserie impression 3d",
    "pièce vintage auto impression 3d",
    "pièce introuvable impression 3d",

    # Cluster 5 — Réparation / pièces de remplacement
    "pièce remplacement impression 3d",
    "pièce cassée impression 3d",
    "pièce obsolète impression 3d",
    "impression 3d réparation",
    "pièce electroménager impression 3d",
    "bouton impression 3d remplacement",
    "poignée impression 3d",

    # Cluster 6 — Architecture / maquettes
    "maquette architecture impression 3d",
    "impression 3d maquette",
    "maquette bâtiment impression 3d",
    "maquette urbanisme impression 3d",
    "impression 3d architecte",
    "impression 3d promoteur immobilier",

    # Cluster 7 — Médical / dentaire
    "impression 3d médical",
    "prothèse impression 3d",
    "orthèse impression 3d",
    "modèle anatomique impression 3d",
    "guide chirurgical impression 3d",
    "impression 3d dentaire",
    "gouttière dentaire impression 3d",

    # Cluster 8 — Figurines / cosplay
    "impression 3d figurine",
    "figurine personnalisée impression 3d",
    "impression 3d miniature",
    "impression 3d warhammer",
    "impression 3d cosplay",
    "accessoire cosplay impression 3d",
    "impression 3d personnalisé",
    "statuette impression 3d",

    # Cluster 9 — Bijoux / cadeaux / déco
    "bijou impression 3d",
    "bague impression 3d",
    "impression 3d cadeau personnalisé",
    "décoration impression 3d",
    "impression 3d prénom",
    "impression 3d photo",
    "porte-clé impression 3d personnalisé",

    # Cluster 10 — Éducation / asso
    "impression 3d école",
    "impression 3d pédagogie",
    "impression 3d collège lycée",
    "impression 3d association",
    "impression 3d fablab",

    # Cluster 11 — Géolocalisation
    "impression 3d strasbourg",
    "impression 3d alsace",
    "impression 3d paris",
    "impression 3d lyon",
    "impression 3d bordeaux",
    "impression 3d toulouse",
    "impression 3d nantes",
    "impression 3d lille",
    "impression 3d marseille",
    "impression 3d montpellier",
    "impression 3d rennes",
    "impression 3d grenoble",
    "impression 3d près de chez moi",

    # Cluster 12 — Matériaux
    "impression 3d résine",
    "impression 3d métal",
    "impression 3d nylon",
    "impression 3d petg",
    "impression 3d abs",
    "impression 3d fibre carbone",
    "impression 3d silicone",
    "impression 3d tpu flexible",
    "impression 3d haute température",

    # Cluster 13 — Conception / CAO / bureau d'études
    "conception et impression 3d",
    "service cao impression 3d",
    "dessin 3d et fabrication",
    "modélisation 3d et impression",
    "bureau d'études impression 3d",
    "ingénieur impression 3d",
]

# Seeds utilisés à l'étape 2 (expansion via keywords_for_keywords)
EXPANSION_SEEDS: list[str] = [
    "impression 3d service",
    "impression 3d pièce",
    "prototypage rapide",
    "impression 3d sur mesure",
    "impression 3d personnalisé",
    "fabrication additive",
]


# ---------------------------------------------------------------------------
# HTTP layer
# ---------------------------------------------------------------------------

def _get_credentials() -> tuple[str, str]:
    login = os.environ.get("DATAFORSEO_LOGIN")
    password = os.environ.get("DATAFORSEO_PASSWORD")
    if not login or not password:
        sys.stderr.write(
            "Erreur : variables d'environnement DATAFORSEO_LOGIN et "
            "DATAFORSEO_PASSWORD requises.\n"
        )
        sys.exit(2)
    return login, password


def _post(endpoint: str, payload: list[dict[str, Any]], context: str) -> dict[str, Any]:
    """POST avec retry x3 et backoff exponentiel."""
    login, password = _get_credentials()
    url = f"{API_BASE}{endpoint}"

    last_error: Exception | None = None
    for attempt in range(1, MAX_RETRIES + 1):
        try:
            response = requests.post(
                url,
                auth=(login, password),
                json=payload,
                timeout=TIMEOUT_SECONDS,
            )
            response.raise_for_status()
            data = response.json()
            status = data.get("status_code")
            if status and status >= 40000:
                raise RuntimeError(
                    f"Réponse API en erreur (status_code={status}) : "
                    f"{data.get('status_message')}"
                )
            return data
        except (requests.RequestException, ValueError, RuntimeError) as exc:
            last_error = exc
            wait = RETRY_BACKOFF_SECONDS * (2 ** (attempt - 1))
            logger.error(
                "[%s] tentative %d/%d échouée : %s — retry dans %ds",
                context, attempt, MAX_RETRIES, exc, wait,
            )
            log_progress(
                f"  ! {context} : tentative {attempt}/{MAX_RETRIES} échouée "
                f"({exc.__class__.__name__}). Retry dans {wait}s."
            )
            if attempt < MAX_RETRIES:
                time.sleep(wait)

    logger.error("[%s] abandon après %d tentatives : %s", context, MAX_RETRIES, last_error)
    return {}


# ---------------------------------------------------------------------------
# Étape 1 : volumes pour les seeds
# ---------------------------------------------------------------------------

def _chunks(seq: list[str], size: int) -> Iterable[list[str]]:
    for i in range(0, len(seq), size):
        yield seq[i:i + size]


def fetch_search_volumes(keywords: list[str]) -> list[dict[str, Any]]:
    endpoint = "/v3/keywords_data/google_ads/search_volume/live"
    results: list[dict[str, Any]] = []
    batches = list(_chunks(keywords, BATCH_SIZE))
    total_batches = len(batches)

    log_progress(f"Étape 1 — volumes pour {len(keywords)} seeds en {total_batches} batch(s).")

    for idx, batch in enumerate(batches, start=1):
        payload = [{
            "keywords": batch,
            "location_code": LOCATION_CODE,
            "language_code": LANGUAGE_CODE,
        }]
        log_progress(f"  → batch {idx}/{total_batches} ({len(batch)} mots-clés)")
        data = _post(endpoint, payload, context=f"search_volume batch {idx}")
        if not data:
            continue

        before = len(results)
        for task in data.get("tasks") or []:
            if task.get("status_code") and task["status_code"] >= 40000:
                logger.error(
                    "[search_volume] task en erreur : %s", task.get("status_message"),
                )
                continue
            for item in task.get("result") or []:
                results.append({
                    "keyword": item.get("keyword"),
                    "volume_mensuel": item.get("search_volume"),
                    "competition": item.get("competition"),
                    "cpc": item.get("cpc"),
                })
        log_progress(f"    ✓ {len(results) - before} résultats récupérés (total : {len(results)})")

    return results


# ---------------------------------------------------------------------------
# Étape 2 : expansion via keywords_for_keywords
# ---------------------------------------------------------------------------

def fetch_keyword_ideas(seeds: list[str]) -> list[dict[str, Any]]:
    """
    Appelle keywords_for_keywords/live, un seed par requête, pour cibler
    100 idées par seed group avec filtres volume > 50.
    """
    endpoint = "/v3/keywords_data/google_ads/keywords_for_keywords/live"
    results: list[dict[str, Any]] = []

    log_progress(f"Étape 2 — expansion à partir de {len(seeds)} seed group(s).")

    for idx, seed in enumerate(seeds, start=1):
        payload = [{
            "keywords": [seed],
            "location_code": LOCATION_CODE,
            "language_code": LANGUAGE_CODE,
            "filters": [["search_volume", ">", IDEAS_VOLUME_FILTER]],
            "order_by": ["search_volume,desc"],
            "limit": IDEAS_LIMIT_PER_GROUP,
        }]
        log_progress(f"  → seed {idx}/{len(seeds)} : « {seed} »")
        data = _post(endpoint, payload, context=f"keywords_for_keywords seed={seed}")
        if not data:
            continue

        before = len(results)
        for task in data.get("tasks") or []:
            if task.get("status_code") and task["status_code"] >= 40000:
                logger.error(
                    "[keywords_for_keywords] task en erreur (seed=%s) : %s",
                    seed, task.get("status_message"),
                )
                continue
            for item in task.get("result") or []:
                results.append({
                    "keyword": item.get("keyword"),
                    "volume_mensuel": item.get("search_volume"),
                    "competition": item.get("competition"),
                    "cpc": item.get("cpc"),
                })
        log_progress(f"    ✓ {len(results) - before} idées (total : {len(results)})")

    return results


# ---------------------------------------------------------------------------
# Étape 3 : fusion / déduplication / filtre
# ---------------------------------------------------------------------------

def _to_float(value: Any) -> float:
    try:
        return float(value)
    except (TypeError, ValueError):
        return 0.0


def build_opportunites(
    seeds: list[dict[str, Any]],
    ideas: list[dict[str, Any]],
) -> list[dict[str, Any]]:
    """Fusionne, déduplique sur keyword (en gardant le volume le plus haut),
    filtre volume > 100, trie par cpc desc."""
    bag: dict[str, dict[str, Any]] = {}
    for row in (*seeds, *ideas):
        kw = (row.get("keyword") or "").strip().lower()
        if not kw:
            continue
        existing = bag.get(kw)
        if existing is None or _to_float(row.get("volume_mensuel")) > _to_float(existing.get("volume_mensuel")):
            bag[kw] = {
                "keyword": row.get("keyword"),
                "volume_mensuel": row.get("volume_mensuel"),
                "competition": row.get("competition"),
                "cpc": row.get("cpc"),
            }

    filtered = [r for r in bag.values() if _to_float(r.get("volume_mensuel")) > OPPORTUNITES_VOLUME_FILTER]
    filtered.sort(key=lambda r: _to_float(r.get("cpc")), reverse=True)
    return filtered


# ---------------------------------------------------------------------------
# Export CSV
# ---------------------------------------------------------------------------

CSV_FIELDS = ["keyword", "volume_mensuel", "competition", "cpc"]


def export_csv(rows: list[dict[str, Any]], base_name: str) -> str:
    filename = f"{base_name}_{TIMESTAMP}.csv"
    path = os.path.join(OUTPUT_DIR, filename)

    with open(path, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=CSV_FIELDS)
        writer.writeheader()
        for row in rows:
            writer.writerow({k: row.get(k) for k in CSV_FIELDS})

    log_progress(f"  ✓ Export : {path} ({len(rows)} lignes)")
    return path


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main() -> int:
    log_progress("=== Keyword research impression 3D — DataForSEO ===")
    log_progress(f"Sortie : {OUTPUT_DIR} (timestamp {TIMESTAMP})")
    log_progress(f"Logs erreurs : {ERRORS_LOG}")

    # Étape 1
    seeds = fetch_search_volumes(SEED_KEYWORDS)
    export_csv(seeds, "3d_seeds_volumes")

    # Étape 2
    ideas = fetch_keyword_ideas(EXPANSION_SEEDS)
    export_csv(ideas, "3d_ideas_expanded")

    # Étape 3
    log_progress("Étape 3 — fusion + dédup + filtre volume > 100, tri cpc desc.")
    opportunites = build_opportunites(seeds, ideas)
    export_csv(opportunites, "3d_opportunites")

    log_progress("=== Terminé ===")
    log_progress(
        f"Récap : {len(seeds)} seeds, {len(ideas)} idées, "
        f"{len(opportunites)} opportunités finales."
    )
    return 0


if __name__ == "__main__":
    sys.exit(main())
