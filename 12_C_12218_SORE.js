console.log("[BARATIE RESTAURANT]");
console.log('_'.repeat(50));

// FUNGSI UNTUK MEMPROSES PEMBAYARAN
function processPayment(hargaTotal, bayar, method) {
  // periksa data di sini
  try {
    if (typeof hargaTotal !== "number" || typeof bayar !== "number") {
      throw "Both total price and amount given must be numbers";
    }

    const validMethods = ["cash", "credit", "voucher"];
    if (!validMethods.includes(method)) {
      throw "Unknown payment method";
    }

    if (bayar < hargaTotal) {
      throw "Amount given is less than the total price";
    }

    if (method === "voucher") {
      console.log("Processing voucher payment...");
    } else {
      console.log(`Processing ${method} payment...`);
    }

    const kembalian = bayar - hargaTotal;
    console.log(`Transaction successful. Change to return: ${kembalian}`);
  } catch (error) {
    console.error(`Error: ${error}`);
  } finally {
    console.log("Cleaning up resources...");
  }
}

// INISIALISASI DATA
const testCases = [
  { label: "[1]", total: 50, bayar: "fifty", method: "credit" },
  { label: "[2]", total: 50, bayar: 35, method: "cash" },
  { label: "[3]", total: 50, bayar: 125, method: "voucher" },
  { label: "[4]", total: 50, bayar: 75, method: "bitcoin" } // Error
];

// PEMANGGILAN
testCases.forEach(({ label, total, bayar, method }) => {
  console.log(label);
  processPayment(total, bayar, method);
  console.log('_'.repeat(50));
});

