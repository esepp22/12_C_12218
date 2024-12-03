console.log("PENDAFTARAN MAHASISWA BARU UNIVERSITAS CENDRAWASIH");
console.log('_'.repeat(50));

//mengitung umur 
function calculateAge(tanggalLahir) {
  const today = new Date();
  const birthDate = new Date(tanggalLahir);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

// FUNGSI UNTUK VALIDASI DATA
function validateData(studentData) {
  // pemeriksaan data disini, delay 5 detik
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (!studentData.nama || !studentData.umur || !studentData.ktp) {
        reject("Invalid data");
      } else if (studentData.umur <= 17) {
        reject("Student is too young");
      } else if (studentData.ktp.length !== 16) {
        reject("Invalid KTP number");
      } else {
        resolve(`Student ${studentData.nama} has been successfully registered`);
      }
    }, 500);
  });
}


// FUNGSI UNTUK MEMPROSES DATA
async function processData(studentData) 
    {
        try {
          const result = await validateData(studentData);
          console.log(result);
        } catch (error) {
          console.error(`An error occurred: ${error}`);
        }
  // proses data disini
}

// PEMANGGILAN
processData({ nama: "", umur: 22, ktp: "1234567890123456" });
processData({ nama: "Fahmy", umur: 16, ktp: "1234567890123456" });
processData({ nama: "Kevin", umur: 20, ktp: "12345" });
processData({ nama: "esep", umur: 19, ktp: "2317122181234567" });
processData({ nama: "Kay", umur: 22, ktp: "1122334455667788" });

