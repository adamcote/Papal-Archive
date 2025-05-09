import React, { useState } from 'react';
import { Pope } from '../types/Pope';
import { popes } from '../data/popes';
import { 
    Container, 
    Grid, 
    Card, 
    CardContent, 
    Typography, 
    List, 
    ListItem, 
    ListItemText,
    ListItemAvatar,
    Avatar,
    Divider,
    Paper
} from '@mui/material';

const Biographies: React.FC = () => {
    const [selectedPope, setSelectedPope] = useState<Pope | null>(null);

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
                {/* Pope List */}
                <Grid item xs={12} md={4}>
                    <Paper elevation={3} sx={{ p: 2, maxHeight: '80vh', overflow: 'auto' }}>
                        <Typography variant="h5" gutterBottom>
                            List of Popes
                        </Typography>
                        <List>
                            {popes.map((pope) => (
                                <React.Fragment key={pope.id}>
                                    <ListItem 
                                        button 
                                        onClick={() => setSelectedPope(pope)}
                                        selected={selectedPope?.id === pope.id}
                                    >
                                        <ListItemAvatar>
                                            <Avatar>{pope.regnalName[0]}</Avatar>
                                        </ListItemAvatar>
                                        <ListItemText 
                                            primary={pope.regnalName}
                                            secondary={`${pope.papacyStart} - ${pope.papacyEnd}`}
                                        />
                                    </ListItem>
                                    <Divider />
                                </React.Fragment>
                            ))}
                        </List>
                    </Paper>
                </Grid>

                {/* Pope Details */}
                <Grid item xs={12} md={8}>
                    {selectedPope ? (
                        <Paper elevation={3} sx={{ p: 3 }}>
                            <Typography variant="h4" gutterBottom>
                                {selectedPope.regnalName}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                                {selectedPope.birthName} ({selectedPope.birthDate} - {selectedPope.deathDate})
                            </Typography>
                            
                            <Typography variant="h6" sx={{ mt: 2 }}>Biography</Typography>
                            <Typography paragraph>
                                {selectedPope.biography}
                            </Typography>

                            <Typography variant="h6" sx={{ mt: 2 }}>Notable Events</Typography>
                            <List>
                                {selectedPope.notableEvents.map((event, index) => (
                                    <ListItem key={index}>
                                        <ListItemText primary={event} />
                                    </ListItem>
                                ))}
                            </List>

                            <Typography variant="h6" sx={{ mt: 2 }}>Papacy</Typography>
                            <Typography>
                                Reign: {selectedPope.papacyStart} - {selectedPope.papacyEnd}
                            </Typography>
                            {selectedPope.predecessor && (
                                <Typography>
                                    Predecessor: {selectedPope.predecessor}
                                </Typography>
                            )}
                            {selectedPope.successor && (
                                <Typography>
                                    Successor: {selectedPope.successor}
                                </Typography>
                            )}
                        </Paper>
                    ) : (
                        <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
                            <Typography variant="h6" color="text.secondary">
                                Select a pope to view their biography
                            </Typography>
                        </Paper>
                    )}
                </Grid>
            </Grid>
        </Container>
    );
};

export default Biographies; 