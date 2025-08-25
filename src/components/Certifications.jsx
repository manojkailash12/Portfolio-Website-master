import {
  Box,
  Typography,
  Paper,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
// Certificate Images
import accentureImg from "../assets/certificates/Accenture Software Engineering Job Simulation.png";
import awsImg from "../assets/certificates/Aws Solutions Architecture Job Simulation(Forage).png";
import deloitteImg from "../assets/certificates/Deloite Australia  Data Analytics Certificate.png";
import pythonEssentialsImg from "../assets/certificates/Python Essentials Cisco.png";
import skyscannerImg from "../assets/certificates/Skyscanner Frontend Software Job Simulation.png";
import tataGenAIImg from "../assets/certificates/TATA GenAI Powered Data Analytics Job Simulation (Forage).png";
import walmartImg from "../assets/certificates/Walmart Adavanced Software Engineering Job Simulation(Forage).png";

// Certificate PDFs
import accenturePdf from "../assets/certificates/Accenture Software Engineering Job Simulation.pdf";
import awsPdf from "../assets/certificates/Aws Solutions Architecture Job Simulation(Forage).pdf";
import deloittePdf from "../assets/certificates/Deloite Australia  Data Analytics Certificate.pdf";
import pythonEssentialsPdf from "../assets/certificates/Python Essentials Cisco.pdf";
import skyscannerPdf from "../assets/certificates/Skyscanner Frontend Software Job Simulation.pdf";
import tataGenAIPdf from "../assets/certificates/TATA GenAI Powered Data Analytics Job Simulation (Forage).pdf";
import walmartPdf from "../assets/certificates/Walmart Adavanced Software Engineering Job Simulation(Forage).pdf";


const certifications = [
  {
    title: "Accenture - Software Engineering Job Simulation",
    organization: "Forage",
    issue_date: "May 2025",
    image: accentureImg,
    file: accenturePdf,
  },
  {
    title: "AWS Solutions Architecture Job Simulation",
    organization: "Forage",
    issue_date: "May 2025",
    image: awsImg,
    file: awsPdf,
  },
  {
    title: "Deloitte Australia - Data Analytics Certificate",
    organization: "Forage",
    issue_date: "May 2025",
    image: deloitteImg,
    file: deloittePdf,
  },
  {
    title: "Python Essentials",
    organization: "Cisco",
    issue_date: "April 2024",
    image: pythonEssentialsImg,
    file: pythonEssentialsPdf,
  },
  {
    title: "Skyscanner - Frontend Software Engineering Job Simulation",
    organization: "Forage",
    issue_date: "May 2025",
    image: skyscannerImg,
    file: skyscannerPdf,
  },
  {
    title: "TATA - GenAI Powered Data Analytics Job Simulation",
    organization: "Forage",
    issue_date: "June 2025",
    image: tataGenAIImg,
    file: tataGenAIPdf,
  },
  {
    title: "Walmart - Advanced Software Engineering Job Simulation",
    organization: "Forage",
    issue_date: "June 2025",
    image: walmartImg,
    file: walmartPdf,
  },
];

// Helper to sort by date descending (YYYY/MM or Month YYYY)
const parseDate = (dateStr) => {
  // Try to parse as 'Month YYYY'
  const [month, year] = dateStr.split(" ");
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthIdx = months.findIndex((m) => m === month);
  return year
    ? new Date(parseInt(year), monthIdx === -1 ? 0 : monthIdx)
    : new Date(dateStr);
};

const sortedCerts = certifications
  .slice()
  .sort((a, b) => parseDate(b.issue_date) - parseDate(a.issue_date));

const Certifications = () => {
  return (
    <Paper elevation={3} sx={{ p: { xs: 2, sm: 4 }, my: 4 }}>
      <Typography variant="h2" component="h2" gutterBottom align="center">
        Certifications
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: 2, sm: 3 },
          mt: 4,
        }}
      >
        {sortedCerts.map((cert) => (
          <Card
            key={cert.title}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "stretch",
              p: { xs: 0.5, sm: 1.5 },
              boxShadow: 4,
              mb: { xs: 2, sm: 0 },
              minWidth: 0,
              width: { xs: "100%", sm: "96%", md: "92%", lg: "88%" },
              maxWidth: { xs: "100%", sm: "100%", md: 1100, lg: 1300 },
              mx: "auto",
              background: (theme) =>
                theme.palette.mode === "dark" ? "#232b3b" : "#f8fafc",
              borderRadius: 8,
              border: (theme) =>
                `1.5px solid ${
                  theme.palette.mode === "dark"
                    ? theme.palette.primary.main
                    : "#e0e7ef"
                }`,
              gap: { xs: 0, sm: 0 },
            }}
          >
            {/* Image on the left or top */}
            <Box
              sx={{
                flex: { xs: "unset", sm: "0 0 340px" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: 0,
                p: { xs: 1, sm: 2 },
                background: "#fff",
                borderRadius: { xs: 6, sm: "8px 0 0 8px" },
                borderRight: {
                  xs: "none",
                  sm: (theme) =>
                    `1.5px solid ${
                      theme.palette.mode === "dark"
                        ? theme.palette.primary.main
                        : "#e0e7ef"
                    }`,
                },
                mb: { xs: 0, sm: 0 },
              }}
            >
              <Box
                component="img"
                src={cert.image}
                alt={cert.title}
                sx={{
                  width: { xs: "100%", sm: 300, md: 320 },
                  height: { xs: 120, sm: 180, md: 220 },
                  objectFit: "contain",
                  borderRadius: 4,
                  boxShadow: "0 2px 8px 0 rgba(0,0,0,0.06)",
                  background: "#fff",
                }}
              />
            </Box>
            {/* Text and button on the right or below */}
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: { xs: "center", sm: "flex-start" },
                px: { xs: 1, sm: 3 },
                py: { xs: 1.5, sm: 2 },
                gap: 1.5,
                minWidth: 0,
              }}
            >
              <Typography
                variant="h5"
                fontWeight={600}
                gutterBottom
                sx={{ textAlign: { xs: "center", sm: "left" } }}
              >
                {cert.title}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                sx={{ textAlign: { xs: "center", sm: "left" } }}
              >
                {cert.organization}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 1, textAlign: { xs: "center", sm: "left" } }}
              >
                Issued: {cert.issue_date}
              </Typography>
              <Box
                sx={{ mt: 2, alignSelf: { xs: "center", sm: "flex-start" } }}
              >
                <Button
                  variant="outlined"
                  color="primary"
                  href={cert.file}
                  target="_blank"
                  startIcon={<PictureAsPdfIcon />}
                  sx={{ mb: 1, minWidth: 120 }}
                >
                  View PDF
                </Button>
              </Box>
            </Box>
          </Card>
        ))}
      </Box>
    </Paper>
  );
};

export default Certifications;
