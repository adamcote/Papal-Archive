import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
} from '@mui/material';
import HistoryIcon from '@mui/icons-material/History';
import TimelineIcon from '@mui/icons-material/Timeline';
import BookIcon from '@mui/icons-material/Book';

const Home: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            fontFamily: '"Playfair Display", serif',
            fontWeight: 700,
            color: 'primary.main',
          }}
        >
          Welcome to the Papal Archive
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Explore the rich history of the papacy from St. Peter to Pope Leo XIV
        </Typography>
      </Box>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <TimelineIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="h5" component="h2">
                  Interactive Timeline
                </Typography>
              </Box>
              <Typography variant="body1" paragraph>
                Journey through two millennia of papal history with our interactive timeline.
                Explore the reigns, achievements, and historical context of each pope.
              </Typography>
              <Button
                component={RouterLink}
                to="/timeline"
                variant="contained"
                color="primary"
              >
                Explore Timeline
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <HistoryIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="h5" component="h2">
                  Papal Biographies
                </Typography>
              </Box>
              <Typography variant="body1" paragraph>
                Discover detailed biographies of each pope, including their achievements,
                notable events, and lasting impact on the Church and the world.
              </Typography>
              <Button
                component={RouterLink}
                to="/biographies"
                variant="contained"
                color="primary"
              >
                View Biographies
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <BookIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="h5" component="h2">
                  Historical Documents
                </Typography>
              </Box>
              <Typography variant="body1" paragraph>
                Access a curated collection of important papal documents, encyclicals,
                and historical texts that have shaped the Church and society.
              </Typography>
              <Button
                component={RouterLink}
                to="/documents"
                variant="contained"
                color="primary"
              >
                Browse Documents
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Paper sx={{ mt: 4, p: 3, bgcolor: 'background.default' }}>
        <Typography variant="h4" gutterBottom>
          Latest Updates
        </Typography>
        <Typography variant="body1">
          The Papal Archive has been updated to include the election of Pope Leo XIV,
          marking a new chapter in the history of the Catholic Church. Explore the
          latest additions to our collection and stay informed about recent developments.
        </Typography>
      </Paper>
    </Container>
  );
};

export default Home; 