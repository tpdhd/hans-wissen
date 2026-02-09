import requests
import json

def search_exercise(query):
    """Search for exercises by name"""
    url = f"https://exercisedb-api.vercel.app/api/v1/exercises?limit=50"
    response = requests.get(url)
    data = response.json()
    
    results = []
    for ex in data.get('data', []):
        if query.lower() in ex['name'].lower():
            results.append({
                'id': ex['exerciseId'],
                'name': ex['name'],
                'gifUrl': ex['gifUrl'],
                'muscles': ex['targetMuscles'],
                'equipment': ex['equipments']
            })
    return results

searches = [
    ('squat', 'body weight squat'),
    ('calf raise', 'standing calf raise'),
    ('bridge', 'glute bridge'),
    ('push', 'push up'),
    ('plank', 'plank'),
    ('leg raise', 'side leg raise'),
    ('lunge', 'lunge'),
    ('bird dog', 'bird dog'),
    ('dead bug', 'dead bug'),
]

for term, desc in searches:
    print(f"\n=== Searching for: {desc} (term: {term}) ===")
    results = search_exercise(term)
    for r in results[:3]:
        print(f"  {r['id']}: {r['name']}")
        print(f"    GIF: {r['gifUrl']}")
        print(f"    Muscles: {', '.join(r['muscles'])}")
        print(f"    Equipment: {', '.join(r['equipment'])}")
