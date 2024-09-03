import React from 'react';
import { Box, Card, CardMedia, Typography, keyframes } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import img1 from "./assets/data-eng.jpg"
import img2 from "./assets/data-scientist.jpg"
import img3 from "./assets/data-analyst.jpg"
import img4 from "./assets/data-ve.jpg"
import img5 from "./assets/data-python.jpg"


const HorizontalScrollCards = () => {
  const cards = [
    { title: 'Become a successful data engineer', date: '24/09/2024 ', image: img1, link: "https://coursevita.com/courses/dataVisualization " },
    { title: 'Become a Successful Data Scientist', date: '24/09/2024', image: img2, link: " https://coursevita.com/courses/dataScience " },
    { title: 'Become a successful data Analyst', date: '24/09/2024', image: img3, link: " https://coursevita.com/courses/dataAnalytics " },
    { title: 'Become a successful data visualization expert', date: '24/09/2024', image: img4, link: "https://coursevita.com/courses/dataVisualization " },
    { title: 'Python for Data Analytics', date: '24/09/2024', image: img5, link: "https://upskill.coursevita.com/python-data-analytics" },
  ];

  const scrollAnimation = keyframes`
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  `;

  return (
    <Box
      sx={{
        display: 'flex',
        overflow: 'hidden', 
        width: '100%', 
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          animation: `${scrollAnimation} 20s linear infinite`, 
          margin: '20px',
          animationPlayState: 'running', 
          '&:hover': {
            animationPlayState: 'paused', 
          },
        }}
      >
        {cards.map((card, index) => (

          <Card
            key={index}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minWidth: 300,
              minHeight: 150,
              bgcolor: '#F9EFF8',
              padding: "15px",
              transition: 'transform 0.5s, box-shadow 0.5s',
              transformStyle: 'preserve-3d',
              '&:hover': {
                transform: 'perspective(1000px) scale(1.1) rotateY(10deg) rotateX(5deg)', // 3D pop-up effect on hover
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)', // Shadow to enhance the 3D effect
              },
              border: '1px solid #6a1b9a', 
              borderRadius: '8px', 
            }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <CardMedia
                component="img"
                alt="green iguana"
                sx={{ width: 80, height: 40, borderRadius: 2 }}
                image={card.image}
              />
              <Box sx={{ display: 'flex', background: "white", borderRadius: 6, alignItems: "center", padding: 1.5 }}>
                <FiberManualRecordIcon sx={{ color: 'green', fontSize: 8, }} />
                <Typography variant="body2" sx={{ fontSize: '0.7rem' }} >Upcoming</Typography>
              </Box>
            </Box>
            <h4>{card.title}</h4>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <a href={card.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 35,  
                    height: 35, 
                    borderRadius: '50%',
                    backgroundColor: '#6a1b9a', 
                    // transform: 'rotate(45deg)',
                  }}
                >
                  <ArrowUpwardIcon sx={{ color: 'white', fontSize: 20, transform: 'rotate(30deg)' }} />  
                </Box>
              </a>
              <Box sx={{ display: 'flex', alignItems: "center" }}>
                <CalendarTodayIcon sx={{ color: '#757575', mr: 1 }} />
                <Typography variant="body2" >{card.date}</Typography>
              </Box>

            </Box>


          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default HorizontalScrollCards;
