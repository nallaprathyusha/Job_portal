// Job data (mock data)
const jobs = [
  {
    title: "Frontend Developer",
    company: "INFOSYS",
    location: "India",
    type: "Full Time"
  },
  {
    title: "Backend Developer",
    company: "GOOGLE",
    location: "USA",
    type: "Full Time"
  },
  {
    title: "UI/UX Designer",
    company: "COGNIZANT",
    location: "Remote",
    type: "Contract"
  },
  {
    title: "React Developer",
    company: "Startup",
    location: "Remote",
    type: "Full Time"
  },
  {
    title: "Web Developer Intern",
    company: "TCS",
    location: "India",
    type: "Internship"
    
  },
   {
    title: "Data Analyst",
    company: "CAPGEMINI",
    location: "India",
    type: "Internship"

  }
];

// DOM elements
const jobList = document.getElementById("jobList");
const searchInput = document.getElementById("searchInput");
const locationFilter = document.getElementById("locationFilter");

// Display jobs initially
displayJobs(jobs);

// Search & filter events
searchInput.addEventListener("input", filterJobs);
locationFilter.addEventListener("change", filterJobs);

// Function to display jobs
function displayJobs(jobArray) {
  jobList.innerHTML = "";

  if (jobArray.length === 0) {
    jobList.innerHTML = "<p>No jobs found</p>";
    return;
  }

  jobArray.forEach(job => {
    const jobCard = document.createElement("div");
    jobCard.className = "job-card";

    jobCard.innerHTML = `
      <h3>${job.title}</h3>
      <p><strong>Company:</strong> ${job.company}</p>
      <p><strong>Location:</strong> ${job.location}</p>
      <p><strong>Type:</strong> ${job.type}</p>
      <button>Apply Now</button>
    `;

    jobList.appendChild(jobCard);
  });
}

// Function to filter jobs
function filterJobs() {
  const searchText = searchInput.value.toLowerCase();
  const selectedLocation = locationFilter.value;

  const filteredJobs = jobs.filter(job => {
    const matchesTitle = job.title.toLowerCase().includes(searchText);
    const matchesLocation =
      selectedLocation === "" || job.location === selectedLocation;

    return matchesTitle && matchesLocation;
  });

  displayJobs(filteredJobs);
}
