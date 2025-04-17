document.addEventListener("DOMContentLoaded", function () {
  // Initialize with one entry for each section
  addPrescriptionDrug();
  addOTCDrug();
  addMedicalSupply();
  addParking();
  addTravel();
  addTransportation();
});

// Helper functions
function formatDate(dateString) {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function formatCurrency(amount) {
  return "$" + parseFloat(amount).toFixed(2);
}

function removeEntry(button) {
  const entry = button.closest(".expense-entry");
  if (entry && entry.parentNode.children.length > 1) {
    entry.parentNode.removeChild(entry);
  } else {
    alert("You need at least one entry in each section.");
  }
}

function generateRandomId() {
  return Math.floor(100000 + Math.random() * 900000);
}

// Section addition functions
function addPrescriptionDrug() {
  const container = document.getElementById("prescriptionDrugsContainer");
  const entry = document.createElement("div");
  entry.className = "expense-entry";
  entry.innerHTML = `
      <div class="form-row">
          <div class="form-group">
              <label>Drug Name:</label>
              <input type="text" class="drug-name" required>
          </div>
          <div class="form-group">
              <label>Prescription Date:</label>
              <input type="date" class="prescription-date" required>
          </div>
          <div class="form-group">
              <label>Date Purchased:</label>
              <input type="date" class="purchase-date" required>
          </div>
      </div>
      <div class="form-row">
          <div class="form-group">
              <label>Healthcare Provider:</label>
              <input type="text" class="provider-name" required>
          </div>
          <div class="form-group">
              <label>Amount Paid ($):</label>
              <input type="number" step="0.01" class="amount-paid" required>
          </div>
          <button type="button" class="remove-btn" onclick="removeEntry(this)">Remove</button>
      </div>
  `;
  container.appendChild(entry);
}

function addOTCDrug() {
  const container = document.getElementById("otcDrugsContainer");
  const entry = document.createElement("div");
  entry.className = "expense-entry";
  entry.innerHTML = `
      <div class="form-row">
          <div class="form-group">
              <label>Drug Name:</label>
              <input type="text" class="otc-drug-name" required>
          </div>
          <div class="form-group">
              <label>Date Purchased:</label>
              <input type="date" class="otc-purchase-date" required>
          </div>
          <div class="form-group">
              <label>Amount Paid ($):</label>
              <input type="number" step="0.01" class="otc-amount-paid" required>
          </div>
      </div>
      <div class="form-row">
          <div class="form-group">
              <label>Seller's Name:</label>
              <input type="text" class="otc-seller-name" required>
          </div>
          <div class="form-group">
              <label>Reason for Purchasing:</label>
              <input type="text" class="otc-reason" required>
          </div>
          <button type="button" class="remove-btn" onclick="removeEntry(this)">Remove</button>
      </div>
  `;
  container.appendChild(entry);
}

function addMedicalSupply() {
  const container = document.getElementById("medicalSuppliesContainer");
  const entry = document.createElement("div");
  entry.className = "expense-entry";
  entry.innerHTML = `
      <div class="form-row">
          <div class="form-group">
              <label>Item Purchased:</label>
              <input type="text" class="supply-item" required>
          </div>
          <div class="form-group">
              <label>Date Purchased:</label>
              <input type="date" class="supply-purchase-date" required>
          </div>
          <div class="form-group">
              <label>Was this Prescribed?</label>
              <select class="supply-prescribed" required>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
              </select>
          </div>
      </div>
      <div class="form-row">
          <div class="form-group">
              <label>Healthcare Provider:</label>
              <input type="text" class="supply-provider" required>
          </div>
          <div class="form-group">
              <label>Amount Paid ($):</label>
              <input type="number" step="0.01" class="supply-amount" required>
          </div>
          <div class="form-group">
              <label>Seller's Name:</label>
              <input type="text" class="supply-seller" required>
          </div>
          <button type="button" class="remove-btn" onclick="removeEntry(this)">Remove</button>
      </div>
  `;
  container.appendChild(entry);
}

function addParking() {
  const container = document.getElementById("parkingContainer");
  const entry = document.createElement("div");
  entry.className = "expense-entry";
  entry.innerHTML = `
      <div class="form-row">
          <div class="form-group">
              <label>Healthcare Facility Address:</label>
              <input type="text" class="parking-facility" required>
          </div>
          <div class="form-group">
              <label>Date:</label>
              <input type="date" class="parking-date" required>
          </div>
      </div>
      <div class="form-row">
          <div class="form-group">
              <label>Amount Paid ($):</label>
              <input type="number" step="0.01" class="parking-amount" required>
          </div>
          <div class="form-group">
              <label>Meter Used?</label>
              <select class="parking-meter-used" required>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
              </select>
          </div>
          <div class="form-group">
              <label>Meter Number:</label>
              <input type="text" class="parking-meter-number">
          </div>
          <button type="button" class="remove-btn" onclick="removeEntry(this)">Remove</button>
      </div>
  `;
  container.appendChild(entry);
}

function addTravel() {
  const container = document.getElementById("travelContainer");
  const entry = document.createElement("div");
  entry.className = "expense-entry";
  entry.innerHTML = `
      <div class="form-row">
          <div class="form-group">
              <label>Appointment Date:</label>
              <input type="date" class="travel-date" required>
          </div>
          <div class="form-group">
              <label>Healthcare Facility Address:</label>
              <input type="text" class="travel-facility" required>
          </div>
      </div>
      <div class="form-row">
          <div class="form-group">
              <label>Workplace Address:</label>
              <input type="text" class="travel-workplace" required>
          </div>
          <div class="form-group">
              <label>Distance (Round Trip in km):</label>
              <input type="number" step="0.1" class="travel-distance" required>
          </div>
          <button type="button" class="remove-btn" onclick="removeEntry(this)">Remove</button>
      </div>
  `;
  container.appendChild(entry);
}

function addTransportation() {
  const container = document.getElementById("transportationContainer");
  const entry = document.createElement("div");
  entry.className = "expense-entry";
  entry.innerHTML = `
      <div class="form-row">
          <div class="form-group">
              <label>Appointment Date:</label>
              <input type="date" class="transport-date" required>
          </div>
          <div class="form-group">
              <label>Starting Address:</label>
              <input type="text" class="transport-start">
          </div>
      </div>
      <div class="form-row">
          <div class="form-group">
              <label>Healthcare Facility Address:</label>
              <input type="text" class="transport-facility" required>
          </div>
          <div class="form-group">
              <label>Transport Type:</label>
              <select class="transport-type" required>
                  <option value="Bus">Bus</option>
                  <option value="Taxi">Taxi</option>
              </select>
          </div>
          <div class="form-group">
              <label>Total Fare Paid ($):</label>
              <input type="number" step="0.01" class="transport-fare" required>
          </div>
          <button type="button" class="remove-btn" onclick="removeEntry(this)">Remove</button>
      </div>
  `;
  container.appendChild(entry);
}

function generateReport() {
  if (!document.getElementById("expenseForm").checkValidity()) {
    alert("Please fill in all required fields.");
    return;
  }

  const claimantName = document.getElementById("claimantName").value;
  const claimNumber = document.getElementById("claimNumber").value;

  // Collect all prescription drugs
  const prescriptionDrugs = [];
  document
    .querySelectorAll("#prescriptionDrugsContainer .expense-entry")
    .forEach((entry) => {
      prescriptionDrugs.push({
        drugName: entry.querySelector(".drug-name").value,
        prescriptionDate: formatDate(
          entry.querySelector(".prescription-date").value
        ),
        purchaseDate: formatDate(entry.querySelector(".purchase-date").value),
        providerName: entry.querySelector(".provider-name").value,
        amount: formatCurrency(entry.querySelector(".amount-paid").value),
      });
    });

  // Collect all OTC drugs
  const otcDrugs = [];
  document
    .querySelectorAll("#otcDrugsContainer .expense-entry")
    .forEach((entry) => {
      otcDrugs.push({
        drugName: entry.querySelector(".otc-drug-name").value,
        purchaseDate: formatDate(
          entry.querySelector(".otc-purchase-date").value
        ),
        amount: formatCurrency(entry.querySelector(".otc-amount-paid").value),
        sellerName: entry.querySelector(".otc-seller-name").value,
        reason: entry.querySelector(".otc-reason").value,
      });
    });

  // Collect all medical supplies
  const medicalSupplies = [];
  document
    .querySelectorAll("#medicalSuppliesContainer .expense-entry")
    .forEach((entry) => {
      medicalSupplies.push({
        item: entry.querySelector(".supply-item").value,
        purchaseDate: formatDate(
          entry.querySelector(".supply-purchase-date").value
        ),
        prescribed: entry.querySelector(".supply-prescribed").value,
        providerName: entry.querySelector(".supply-provider").value,
        amount: formatCurrency(entry.querySelector(".supply-amount").value),
        sellerName: entry.querySelector(".supply-seller").value,
      });
    });

  // Collect all parking expenses
  const parkingExpenses = [];
  document
    .querySelectorAll("#parkingContainer .expense-entry")
    .forEach((entry) => {
      parkingExpenses.push({
        facilityAddress: entry.querySelector(".parking-facility").value,
        date: formatDate(entry.querySelector(".parking-date").value),
        amount: formatCurrency(entry.querySelector(".parking-amount").value),
        meterUsed: entry.querySelector(".parking-meter-used").value,
        meterNumber: entry.querySelector(".parking-meter-number").value,
      });
    });

  // Collect all travel expenses
  const travelExpenses = [];
  document
    .querySelectorAll("#travelContainer .expense-entry")
    .forEach((entry) => {
      travelExpenses.push({
        appointmentDate: formatDate(entry.querySelector(".travel-date").value),
        facilityAddress: entry.querySelector(".travel-facility").value,
        workplaceAddress: entry.querySelector(".travel-workplace").value,
        distance: entry.querySelector(".travel-distance").value + " km",
      });
    });

  // Collect all transportation expenses
  const transportationExpenses = [];
  document
    .querySelectorAll("#transportationContainer .expense-entry")
    .forEach((entry) => {
      transportationExpenses.push({
        appointmentDate: formatDate(
          entry.querySelector(".transport-date").value
        ),
        startAddress: entry.querySelector(".transport-start").value,
        facilityAddress: entry.querySelector(".transport-facility").value,
        type: entry.querySelector(".transport-type").value,
        fare: formatCurrency(entry.querySelector(".transport-fare").value),
      });
    });

  // Generate the report HTML
  const reportHTML = `
      <div class="report-header">
      <div class="icon" width="40">
          <img src="img.jpg">
       </div>   
          <div class="report-address">
              333 Broadway<br>
              Winnipeg, MB R3C 4W3<br>
              Phone: (204) 954-4321<br>
              Toll Free: 1-855-954-4321<br>
              wcb.mb.ca
          </div>
          <h1 class="report-title">Medical & Travel Expense <br> Request</h1>
          <div class="report-claim-info">
              <p>Claim No. <span>${claimNumber}</span></p>
          </div>
      </div>

      <div class="report-body">
          <p>${claimantName} requested reimbursement for the following medical and/or travel expenses:</p>

          <!-- Prescription Drugs Section -->
          <h2>Prescription Drugs</h2>
          <table class="report-table">
              <thead>
                  <tr>
                      <th>Drug Name</th>
                      <th>Prescription Date</th>
                      <th>Date Purchased</th>
                      <th>Healthcare Provider Name</th>
                      <th>Paid Amount</th>
                  </tr>
              </thead>
              <tbody>
                  ${prescriptionDrugs
                    .map(
                      (drug) => `
                      <tr>
                          <td>${drug.drugName}</td>
                          <td>${drug.prescriptionDate}</td>
                          <td>${drug.purchaseDate}</td>
                          <td>${drug.providerName}</td>
                          <td>${drug.amount}</td>
                      </tr>
                  `
                    )
                    .join("")}
              </tbody>
          </table>

          <!-- Over-the-Counter Drugs Section -->
          <h2>Over-the-Counter Drugs</h2>
          <table class="report-table">
              <thead>
                  <tr>
                      <th>Drug Name</th>
                      <th>Date Purchased</th>
                      <th>Paid Amount</th>
                      <th>Seller's Name</th>
                      <th>Reason for Purchasing</th>
                  </tr>
              </thead>
              <tbody>
                  ${otcDrugs
                    .map(
                      (drug) => `
                      <tr>
                          <td>${drug.drugName}</td>
                          <td>${drug.purchaseDate}</td>
                          <td>${drug.amount}</td>
                          <td>${drug.sellerName}</td>
                          <td>${drug.reason}</td>
                      </tr>
                  `
                    )
                    .join("")}
              </tbody>
          </table>

          <!-- Medical Supplies Section -->
          <h2>Bandages, Braces or Other Medical Supplies</h2>
          <table class="report-table">
              <thead>
                  <tr>
                      <th>Item Purchased</th>
                      <th>Date Purchased</th>
                      <th>Was this Prescribed?</th>
                      <th>Healthcare Provider Name</th>
                      <th>Paid Amount</th>
                      <th>Seller's Name</th>
                  </tr>
              </thead>
              <tbody>
                  ${medicalSupplies
                    .map(
                      (supply) => `
                      <tr>
                          <td>${supply.item}</td>
                          <td>${supply.purchaseDate}</td>
                          <td>${supply.prescribed}</td>
                          <td>${supply.providerName}</td>
                          <td>${supply.amount}</td>
                          <td>${supply.sellerName}</td>
                      </tr>
                  `
                    )
                    .join("")}
              </tbody>
          </table>

          <!-- Parking Section -->
          <h2>Parking for Medical Appointments</h2>
          <table class="report-table">
              <thead>
                  <tr>
                      <th>Address of Healthcare Provider/Medical Facility</th>
                      <th>Date</th>
                      <th>Paid Amount</th>
                      <th>Meter Used?</th>
                      <th>Meter Number</th>
                  </tr>
              </thead>
              <tbody>
                  ${parkingExpenses
                    .map(
                      (parking) => `
                      <tr>
                          <td>${parking.facilityAddress}</td>
                          <td>${parking.date}</td>
                          <td>${parking.amount}</td>
                          <td>${parking.meterUsed}</td>
                          <td>${parking.meterNumber}</td>
                      </tr>
                  `
                    )
                    .join("")}
              </tbody>
          </table>

          <!-- Travel Section -->
          <h2>Travel to Medical Appointments</h2>
          <p class="info-note">The WCB will generally reimburse only those transportation costs which are in excess of costs that would be incurred by the worker while travelling to and from work.</p>
          <table class="report-table">
              <thead>
                  <tr>
                      <th>Appointment Date</th>
                      <th>Address of Healthcare Provider/Medical Facility</th>
                      <th>Address of Workplace</th>
                      <th>Number of km (Round Trip)</th>
                  </tr>
              </thead>
              <tbody>
                  ${travelExpenses
                    .map(
                      (travel) => `
                      <tr>
                          <td>${travel.appointmentDate}</td>
                          <td>${travel.facilityAddress}</td>
                          <td>${travel.workplaceAddress}</td>
                          <td>${travel.distance}</td>
                      </tr>
                  `
                    )
                    .join("")}
              </tbody>
          </table>

          <!-- Transportation Section -->
          <h2>Bus or Taxi Fare for Medical Appointments</h2>
          <p class="info-note">*Note: Pre-approval is required from your WCB representative to claim taxi fare(s).</p>
          <table class="report-table">
              <thead>
                  <tr>
                      <th>Appointment Date</th>
                      <th>Address of Starting Point</th>
                      <th>Address of Healthcare Provider/Medical Facility</th>
                      <th>Bus or Taxi (indicate one)</th>
                      <th>Total Fare Paid</th>
                  </tr>
              </thead>
              <tbody>
                  ${transportationExpenses
                    .map(
                      (trans) => `
                      <tr>
                          <td>${trans.appointmentDate}</td>
                          <td>${trans.startAddress}</td>
                          <td>${trans.facilityAddress}</td>
                          <td>${trans.type}</td>
                          <td>${trans.fare}</td>
                      </tr>
                  `
                    )
                    .join("")}
              </tbody>
          </table>

          <div class="privacy-notice">
              <label>
                  <input type="checkbox" checked disabled> I understand that the Privacy Notice applies to the personal information collected in this document.
              </label>
          </div>
      </div>

      <div class="report-footer">
          <p>Worker App ID: <span>${generateRandomId()}</span></p>
          <p>Submitted: <span>${new Date().toLocaleString()}</span></p>
          <p class="page-number">Page 1 of 1</p>
      </div>
  `;

  document.getElementById("reportContent").innerHTML = reportHTML;
  document.getElementById("reportContainer").style.display = "block";
  window.scrollTo(0, document.getElementById("reportContainer").offsetTop);
}

function closeReport() {
  document.getElementById("reportContainer").style.display = "none";
}
