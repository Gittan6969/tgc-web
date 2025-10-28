"""Översikt över API-endpoints för TGC Digital-plattformen."""

from typing import TypedDict, Literal


class Endpoint(TypedDict):
    method: Literal["GET", "POST"]
    path: str
    description: str
    input: str
    output: str


ENDPOINTS: list[Endpoint] = [
    {
        "method": "POST",
        "path": "/api/search/snapshot",
        "description": "Initierar en snabb sökning baserad på namn eller bildlänk och returnerar tre toppresultat.",
        "input": "{ 'name': string | None, 'image_url': string | None }",
        "output": "{ 'reach_score': int, 'results': [ { 'title': str, 'source': str, 'url': str, 'date': str, 'sentiment': str } ] }",
    },
    {
        "method": "POST",
        "path": "/api/checkout/purchase",
        "description": "Hanterar betalningen och markerar rapporten som köpt.",
        "input": "{ 'plan': 'single'|'bundle'|'subscription', 'payment_method_id': str }",
        "output": "{ 'status': 'success'|'failed', 'report_id': str, 'receipt_url': str | None }",
    },
    {
        "method": "GET",
        "path": "/api/report/{id}",
        "description": "Returnerar fullständig rapportdata för ett tidigare köp.",
        "input": "URL-parametern {id}",
        "output": "{ 'reach_score': int, 'sentiment': dict, 'mentions': list, 'timeline': list }",
    },
    {
        "method": "POST",
        "path": "/api/dsar/request",
        "description": "Tar emot och bekräftar en begäran om dataportabilitet eller radering (DSAR).",
        "input": "{ 'type': 'erasure'|'access', 'subject': { 'name': str, 'email': str } }",
        "output": "{ 'status': 'received', 'case_id': str }",
    },
]


def list_endpoints() -> list[Endpoint]:
    """Returnerar API-definitionen som kan användas av dokumentationsverktyg."""

    return ENDPOINTS


if __name__ == "__main__":
    from pprint import pprint

    pprint(list_endpoints())
