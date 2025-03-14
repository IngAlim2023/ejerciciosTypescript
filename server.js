import express from "express";
import multer from "multer";
import fs from "fs/promises";

const upload = multer({ dest: "src/uploads/" });

const app = express();

const PORT = process.env.PORT || 4500;

app.post("/fotoUnica", upload.single("foto"), (req, res) => {
  if (req.file) {
    console.log(req.file);
    res.status(301).json({ foto: "Guardada" });
  } else {
    res.status(400).json({ error: "No file uploaded" });
  }
});

const saveImage = async (file) => {

  const fechaToString = `${file.filename}.jpg`;

  const newPath = `./src/uploads/${fechaToString}`;
  await fs.rename(file.path, newPath);
  return newPath;
};

app.listen(PORT, () => {
  console.log(`Aplicación corriendo en el puerto: ${PORT}`);
});
