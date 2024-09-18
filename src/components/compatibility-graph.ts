import * as d3 from "d3";
import { Individual } from "../types/user"; // Assuming types are available
import { clientMock } from "../utils/clients-mock";

// Function to generate graph data from compatibility results
export const generateGraphData = (individuals: Individual[]): { nodes: any[]; links: any[] } => {
  const nodes = individuals.map((individual) => ({ id: individual.name }));
  const nodesSet = new Set(nodes.map((node) => node.id)); // Create a set for quick lookup

  const links = individuals.flatMap((individualA) =>
    individualA.compatibility
      .filter((compatibility) => nodesSet.has(compatibility.individualB)) // Filter out invalid targets
      .map((compatibility) => ({
        source: individualA.name,
        target: compatibility.individualB,
        score: compatibility.score,
      }))
  );
  return { nodes, links };
};

// D3.js rendering logic (without drag functionality)
export const renderCompatibilityGraph = (graphData: { nodes: any[]; links: any[] }) => {
  const width = 800;
  const height = 500;

  // Clear previous SVG content
  const svgContainer = d3.select("#compatibility-graph");
  svgContainer.selectAll("*").remove(); // Remove previous elements

  const svg = svgContainer
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  const simulation = d3.forceSimulation(graphData.nodes)
    .force("link", d3.forceLink(graphData.links).id((d: any) => d.id).distance(150))
    .force("charge", d3.forceManyBody().strength(-300))
    .force("center", d3.forceCenter(width / 2, height / 2));

  // Render links (edges)
  const link = svg.selectAll("line")
    .data(graphData.links)
    .enter().append("line")
    .attr("stroke-width", (d) => Math.sqrt(d.score))
    .attr("stroke", (d) => {
      // Highlight the connection based on score
      if (d.score <= 3) return "red"; // Very Low Compatibility
      if (d.score <= 7) return "orange"; // Low to Moderate Compatibility
      if (d.score <= 11) return "yellow"; // Moderate to High Compatibility
      if (d.score <= 15) return "green"; // High Compatibility
      return "blue"; // Very High Compatibility
    });

  // Render nodes (individuals)
  const node = svg.selectAll<SVGCircleElement, any>("circle")
    .data(graphData.nodes)
    .enter()
    .append("circle")
    .attr("r", 10)
    .attr("fill", "blue");

  node.append("title")
    .text((d: any) => d.id);

  simulation.on("tick", () => {
    link
      .attr("x1", (d: any) => d.source.x)
      .attr("y1", (d: any) => d.source.y)
      .attr("x2", (d: any) => d.target.x)
      .attr("y2", (d: any) => d.target.y);

    node
      .attr("cx", (d: any) => d.x)
      .attr("cy", (d: any) => d.y);
  });
};

// Function to render the graph with mock data
export const renderGraph = (clients: Individual[]) => {
  clientMock.forEach((client: Individual) => {
    const graph = generateGraphData([client]);
    renderCompatibilityGraph(graph);
  });
};

// Example usage with mock data
