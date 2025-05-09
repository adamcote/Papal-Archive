import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';

interface PopeDetailsProps {}

const PopeDetails: React.FC<PopeDetailsProps> = () => {
  const { id } = useParams<{ id: string }>();

  // This would normally come from an API call
  const popeData = {
    name: "Leo XIV",
    regnalName: "Pope Leo XIV",
    birthName: "Giovanni Battista Enrico Antonio Maria Montini",
    birthDate: "1897-09-26",
    deathDate: "1978-08-06",
    reignStart: "2024-03-13",
    reignEnd: null,
    nationality: "Italian",
    birthPlace: "Concesio, Italy",
    achievements: [
      "First pope to be elected in 2024",
      "Continues the legacy of Pope Leo XIII's social teachings",
      "Focuses on modernizing the Church while maintaining tradition"
    ],
    notableEvents: [
      {
        title: "Election",
        description: "Elected as the 267th pope of the Catholic Church",
        date: "2024-03-13"
      }
    ],
    documents: [],
    legacy: "His papacy is just beginning, marking a new era in the Catholic Church"
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          {popeData.regnalName}
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 3, mb: 3 }}>
              <Typography variant="h5" gutterBottom>
                Biography
              </Typography>
              <Typography variant="body1" paragraph>
                Born as {popeData.birthName} in {popeData.birthPlace}, {popeData.nationality}.
                His papacy began on {new Date(popeData.reignStart).toLocaleDateString()}.
              </Typography>
              <Typography variant="body1">
                {popeData.legacy}
              </Typography>
            </Paper>

            <Paper sx={{ p: 3, mb: 3 }}>
              <Typography variant="h5" gutterBottom>
                Achievements
              </Typography>
              <List>
                {popeData.achievements.map((achievement, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={achievement} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom>
                Timeline
              </Typography>
              <List>
                <ListItem>
                  <ListItemText
                    primary="Birth"
                    secondary={new Date(popeData.birthDate).toLocaleDateString()}
                  />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText
                    primary="Papacy Begins"
                    secondary={new Date(popeData.reignStart).toLocaleDateString()}
                  />
                </ListItem>
                {popeData.deathDate && (
                  <>
                    <Divider />
                    <ListItem>
                      <ListItemText
                        primary="Death"
                        secondary={new Date(popeData.deathDate).toLocaleDateString()}
                      />
                    </ListItem>
                  </>
                )}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default PopeDetails;