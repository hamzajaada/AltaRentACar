import requests

headers = {
    'accept': '*/*',
    'accept-language': 'fr-FR,fr;q=0.6',
    'content-type': 'application/x-www-form-urlencoded',
    'origin': 'https://translate.yandex.com',
    'priority': 'u=1, i',
    'referer': 'https://translate.yandex.com/',
    'sec-ch-ua': '"Brave";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
    'sec-ch-ua-mobile': '?1',
    'sec-ch-ua-platform': '"Android"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'cross-site',
    'sec-gpc': '1',
    'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Mobile Safari/537.36',
    'x-retpath-y': 'https://translate.yandex.com',
}

params = {
    'id': '7118f46e.6648f0fb.60e117e4.74722d74657874-1-0',
    'srv': 'tr-text',
    'source_lang': 'fr',
    'target_lang': 'en',
    'reason': 'auto',
    'format': 'text',
    'strategy': '0',
    'disable_cache': 'false',
    'ajax': '1',
    'yu': '1762712181716053538',
}

data = {
    'text': 'bonjour',
    'options': '4',
}

response = requests.post('https://translate.yandex.net/api/v1/tr.json/translate', params=params, headers=headers, data=data)

print(response.text)