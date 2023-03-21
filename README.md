# simple-todo-app

Simple-Todo-App API DOCUMENTATIONS

# IMPORTANT NOTE!!

## Tugas:

### Bangun API sederhana untuk aplikasi manajemen tugas menggunakan Node.js dan Express.js. API harus mendukung titik akhir berikut:

- `DAPATKAN /tugas: Mengembalikan daftar semua tugas.`
- `POST /tugas: Membuat tugas baru. Badan permintaan harus berisi bidang-bidang berikut:`
- `judul: Judul tugas (wajib)`
- `deskripsi: Deskripsi tugas (opsional)`
- `selesai: Boolean yang menunjukkan apakah tugas selesai (default: false)`
- `DAPATKAN /tasks/{id}: Mengembalikan tugas dengan ID yang ditentukan.`
- `PATCH /tasks/{id}: Memperbarui tugas dengan ID yang ditentukan. Badan permintaan harus berisi bidang yang perlu diperbarui.`
- `DELETE /tasks/{id}: Menghapus tugas dengan ID yang ditentukan.`

### Persyaratan:

- `Gunakan database yang sesuai (seperti MongoDB atau MySQL) untuk menyimpan tugas.`
- `Gunakan perutean dan middleware Express.js untuk menangani titik akhir API.`
- `Gunakan penanganan error dan logging yang sesuai untuk memastikan bahwa API kuat dan mudah di-debug.`
- `Gunakan Git untuk kontrol versi dan sertakan file README dengan instruksi tentang cara menjalankan aplikasi.`

### Saran dari Pembuat API

- `Untuk POST /tugas end point diganti menjadi POST /tasks untuk menjadikan satu kesatuan endpoint yang sama dalam membuat, menemukan, menghapus ataupun memperbarui tugas sehingga lebih mudah untuk digunakan`
- `Pembuat API menambahkan end point GET /tasks untuk mendapatkan semua data`
- `Pengecekan API dilakukan menggunakan Postman`

### Pemenuhan Persyaratan

- `Pembuat API menggunakan MongoDB sebagai database untuk menyimpan tugas`
- `Pembuat API membuat perutean sesuai dengan instruksi dan menggunakan Express.js`
- `Pembuat API melakukan penanganan error dengan menyatukan error dalam satu file yaitu ./middlewares/errorHandlers.js sehingga semua error akan masuk pada middlewares errorhandlers dan memudahkan untuk melakukan tracing dan debugging`
- `Pembuat API menggunakan Git control dan mensertakan file README tentang cara menjalankan API`

# List of available data

- `Tasks`

## Endpoints Tasks

List of Available Tasks Endpoints:

- `POST /tugas`
- `GET /tasks`
- `GET /tasks/:id`
- `PATCH /tasks/:id`
- `DELETE /tasks/:id`

### POST /tugas

#### Description

- Membuat tugas baru

#### Request

- Headers
  ```json
  {
    "Content-Type": "application/x-www-form-urlencoded"
  }
  ```
- Body
  ```json
  {
    "judul": String,
    "deskripsi": String,
    "selesai": Boolean
  }
  ```

#### Response

_201 - Created_

- Body
  ```json
  {
     "message": "Berhasil membuat tugas dengan judul : " + judul
  }
  ```

_400 - Bad Request_

- Body

  Jika judul kosong

  ```json
  {
    "statusCode": 400,
    "message": "Judul tidak boleh kosong"
  }
  ```

### GET /tasks

#### Description

- Mendapatkan semua tugas

#### Response

_200 - OK_

- Body
  ```json
  [
    {
      "_id": STRING,
      "judul": STRING,
      "deskripsi": STRING,
      "selesai": BOOLEAN,
      "__v": 0
    },
    {
      "_id": STRING,
      "judul": STRING,
      "deskripsi": STRING,
      "selesai": BOOLEAN,
      "__v": 0
    },
    ...
  ]
  ```

### GET /tasks/:id

#### Description

- mendapatkan tugas berdasarkan id tugas

#### Response

_200 - OK_

- Body
  ```json
    {
      "_id": STRING,
      "judul": STRING,
      "deskripsi": STRING,
      "selesai": BOOLEAN,
      "__v": 0
    }
  ```

_404 - not found_

- Body

  Jika id tugas tidak valid

  ```json
  {
    "statusCode": 404,
    "message": "Tugas yang dicari tidak ada atau id tidak valid"
  }
  ```

### PATCH /tasks/:id

#### Description

- Mengubah badan dari tugas berdasarkan id tugas

#### Request

- Headers
  ```json
  {
    "Content-Type": "application/x-www-form-urlencoded"
  }
  ```
- Body
  ```json
  {
    "judul": String,
    "deskripsi": String,
    "selesai": Boolean
  }
  ```

#### Response

_200 - OK_

- Body

  ```json
  {
    "message": "Tugas berhasil diperbarui"
  }
  ```

  _400 - Bad Request_

- Body

  Jika tidak ada yang dirubah

  ```json
  {
    "statusCode": 400,
    "message": "Tugas tidak diperbarui karena tidak ada yang di ubah"
  }
  ```

  Jika id tidak ditemukan

  ```json
  {
    "statusCode": 404,
    "message": "Tugas yang dicari tidak ada atau id tidak valid"
  }
  ```

### DELETE /tasks/:id

#### Description

- Menghapus tugas berdasarkan id tugas

#### Response

_200 - OK_

- Body

  ```json
  {
    "message": "Berhasil menghapus tugas"
  }
  ```

_404 - Not Found_

- Body

  Jika id tidak ditemukan

  ```json
  {
    "statusCode": 404,
    "message": "Tugas yang dicari tidak ada"
  }
  ```

```

```
