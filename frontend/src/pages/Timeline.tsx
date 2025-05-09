import React, { useEffect, useRef } from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import * as d3 from 'd3';

interface TimelineProps {}

const Timeline: React.FC<TimelineProps> = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    // Clear any existing content
    d3.select(svgRef.current).selectAll('*').remove();

    // Set up the SVG
    const svg = d3.select(svgRef.current);
    const width = 800;
    const height = 400;
    const margin = { top: 20, right: 30, bottom: 30, left: 40 };

    // Create scales
    const x = d3.scaleTime()
      .domain([new Date('1'), new Date('2024')])
      .range([margin.left, width - margin.right]);

    const y = d3.scaleLinear()
      .domain([0, 267]) // Total number of popes
      .range([height - margin.bottom, margin.top]);

    // Add the X axis
    svg.append('g')
      .attr('transform', `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x));

    // Add the Y axis
    svg.append('g')
      .attr('transform', `translate(${margin.left},0)`)
      .call(d3.axisLeft(y));

    // Add a title
    svg.append('text')
      .attr('x', width / 2)
      .attr('y', margin.top)
      .attr('text-anchor', 'middle')
      .style('font-size', '16px')
      .text('Papal Timeline');

  }, []);

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Papal Timeline
        </Typography>
        <Paper sx={{ p: 2 }}>
          <Box sx={{ overflowX: 'auto' }}>
            <svg
              ref={svgRef}
              width="800"
              height="400"
              style={{ display: 'block', margin: '0 auto' }}
            />
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Timeline; 