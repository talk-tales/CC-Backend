# Talk Tales API
**Backend API for the TalkTales application utilized ExpressJs, Prisma ORM and Mysql.**
## API Documentation
    https://documenter.getpostman.com/view/26086126/2sA3XMhNgk

## Installation locally

1. Clone repository ini
2. Jalankan perintah `npm install`
3. Jalankan database server MySQL
4. Buat file `.env` dengan isi sesuai dengan contoh pada file `.env.example`
5. Jalankan perintah `prisma db push` untuk melakukan migrasi database
6. Jalankan perintah `npm start` untuk memulai server. Gunakan library `nodemon` untuk menjalankan server dan otomatis restart ketika file berubah

## Response Structure

Secara umum, format dari response pada setiap request adalah sebagai berikut

```json
{
   success: true | false,
   message: string | null,
   data: object | null
}
```

`success` berisi status apakah request berhasil dijalankan atau mendapatkan error.

`message` berisi keterangan setia response yang diberikan, dapat juga berisi pesan error yang dapat ditampilkan ke user.

`data` adalah hasil dari request yang diminta.

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.
