const urls = [
  'https://postimg.cc/tYkS0nQN',
  'https://postimg.cc/6ytj1LSP',
  'https://postimg.cc/hfcy3bwr',
  'https://postimg.cc/D86jV4k6',
  'https://postimg.cc/Tpf7HqSV',
  'https://postimg.cc/QHh4nkPP',
  'https://postimg.cc/ZC47DFgn',
  'https://postimg.cc/rKMnYCbj',
  'https://postimg.cc/zV8tPSMR',
  'https://postimg.cc/N5DJh2qd',
  'https://postimg.cc/9rC8NtSz',
  'https://postimg.cc/JGx6wHVq',
  'https://postimg.cc/4msLFbMH',
  'https://postimg.cc/1fBCxVhT',
  'https://postimg.cc/F7NWngqD',
  'https://postimg.cc/ppCGN5bk',
  'https://postimg.cc/8j4K8fgp',
  'https://postimg.cc/6ycjs4xs',
  'https://postimg.cc/9rb83w5x',
  'https://postimg.cc/7bgtVQBf',
  'https://postimg.cc/KRfqX3h2',
  'https://postimg.cc/BXpYWPfs',
  'https://postimg.cc/hfsyFQWN',
  'https://postimg.cc/8j4K8fgT',
  'https://postimg.cc/ppCGN5MM',
  'https://postimg.cc/hfsyFQR4'
];

async function fetchDirectLinks() {
  for (const url of urls) {
    try {
      const res = await fetch(url);
      const text = await res.text();
      const match = text.match(/<meta property="og:image" content="([^"]+)"/);
      if (match) {
        console.log(`${url} -> ${match[1]}`);
      } else {
        console.log(`${url} -> NOT FOUND`);
      }
    } catch (e) {
      console.log(`${url} -> ERROR: ${e.message}`);
    }
  }
}

fetchDirectLinks();
