# Tugas 6 Cloud Computing — Kelompok 5

Satu repository untuk deploy Web 1 dan Web 2 melalui Portainer.

## Struktur Repo

```text
web-matematika/
├── web1/                    # Web 1: web matematika kelas 6 (deploy: endpoint 4)
│   ├── Dockerfile
│   ├── compose.yml          # build image, port 8081 -> 80
│   └── site/                # konten statis yang di-copy ke nginx
├── web2/                    # Web 2: halaman khusus Web 2 (deploy: endpoint 4)
│   ├── Dockerfile
│   ├── compose.yml          # build image, port 8082 -> 80
│   └── site/
└── docs/
```

## Alur Deploy di Portainer

| Stack | Endpoint | Compose path | Hasil |
|---|---|---|---|
| `web1` | 4 (Server 1) | `web1/compose.yml` | `http://192.168.122.161:8081` |
| `web2` | 4 (Server 1) | `web2/compose.yml` | `http://192.168.122.161:8082` |

## Catatan Penting

- Semua web memakai `build: .` (bukan `image: nginx:alpine`), sehingga
  konten di `site/` benar-benar di-bake ke dalam image nginx.
  Inilah alasan deploy sebelumnya hanya menampilkan halaman default nginx.
- Deploy **wajib lewat opsi Repository** di Portainer (bukan Web editor),
  karena `build: .` membutuhkan Dockerfile dari repo yang di-clone ke server.
- Web lama di Server 3 dan `portainer-test` port 3002 tidak disentuh.
