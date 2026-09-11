export type ProjectTab = {
  label: string;
  image: string;
  description: string;
};

export type Project = {
  title: string;
  location: string;
  category: string;
  image: string;
  description: string;
  specs: string[];
  tabs: ProjectTab[];
};

export const projects: Project[] = [
  {
    title: "Rooftop Structure Installation in Progress",
    location: "Bengaluru",
    category: "Commercial",
    image: "/project-real-1.png",
    description:
      "Commercial rooftop structure work in progress with aligned mounting rails prepared for large-scale solar module installation.",
    specs: ["Type: Commercial Rooftop", "Stage: Structure Installation", "Location: Bengaluru"],
    tabs: [
      {
        label: "Project",
        image: "/project-real-1.png",
        description:
          "Structural framework and mounting preparation for a commercial rooftop solar array, focused on load distribution and long-term durability.",
      },
      {
        label: "Site View",
        image: "/project-real-2.png",
        description:
          "Wide rooftop view showing progress across mounting rows before final module placement and electrical interconnection.",
      },
    ],
  },
  {
    title: "Large-Scale Commercial Rooftop Solar Array",
    location: "Bengaluru",
    category: "Commercial",
    image: "/project-real-2.png",
    description:
      "A large commercial rooftop solar installation designed for daytime load offset and long-term operating-cost reduction.",
    specs: ["Type: Commercial Rooftop", "Focus: High Daytime Generation", "Location: Bengaluru"],
    tabs: [
      {
        label: "Project",
        image: "/project-real-2.png",
        description:
          "Completed commercial rooftop array arranged for efficient generation, service access, and consistent module alignment.",
      },
      {
        label: "Array Detail",
        image: "/project-3.jpg",
        description:
          "Close view of module rows and cable routing planned for reliable performance and easier maintenance.",
      },
    ],
  },
  {
    title: "3kW Residential Rooftop Solar Installation",
    location: "Bengaluru",
    category: "Residential",
    image: "/project-real-3.png",
    description:
      "A compact 3 kW residential rooftop solar system sized for daily household consumption and cleaner energy usage.",
    specs: ["Type: On-Grid", "Solar PV Capacity: 3 kW", "Location: Bengaluru"],
    tabs: [
      {
        label: "Project",
        image: "/project-real-3.png",
        description:
          "Residential rooftop installation completed for dependable daytime generation and reduced grid dependence.",
      },
      {
        label: "System View",
        image: "/project-2.jpg",
        description:
          "Final rooftop layout optimized for available roof space, shading clearance, and neat cable management.",
      },
    ],
  },
  {
    title: "Rooftop Solar Power Hybrid System Installation",
    location: "Hosa Road, Bengaluru",
    category: "Residential",
    image: "/project-1.jpg",
    description:
      "A 9 kW rooftop hybrid solar PV system installed at Hosa Road, Bengaluru with a 12 kVA hybrid inverter and 5 kWh lithium-ion LFP battery backup.",
    specs: [
      "Type: Hybrid Inverter",
      "Solar PV Capacity: 9 kW",
      "Hybrid Inverter: 12 kVA",
      "Lithium-ion LFP Battery: 5 kWh",
    ],
    tabs: [
      {
        label: "Project",
        image: "/project-1.jpg",
        description:
          "The project requirement was a hybrid solar system. Since the client did not have a permanent EB/Grid connection, the system was configured with zero export so electricity can be used from multiple sources: temporary grid/EB, solar, and battery.",
      },
      {
        label: "Solar PV",
        image: "/project-1.jpg",
        description:
          "The solar panels were securely mounted on the installed structure with proper spacing and alignment for maximum sunlight absorption.",
      },
      {
        label: "Hybrid Inverter",
        image: "/project-4.jpg",
        description:
          "The hybrid inverter was installed to efficiently manage solar power generation, battery backup, and grid supply.",
      },
      {
        label: "Battery Backup",
        image: "/project-5.jpg",
        description:
          "The lithium-ion LFP battery backup was integrated with the hybrid inverter to support stored energy usage when solar or grid supply is limited.",
      },
      {
        label: "System Setup",
        image: "/project-6.jpg",
        description:
          "The final system setup was arranged for clean cable routing, accessible maintenance, and coordinated operation across solar PV, inverter, grid input, and battery storage.",
      },
    ],
  },
  {
    title: "5kW On-Grid Solar System for Independent Home",
    location: "Whitefield, Bengaluru",
    category: "Residential",
    image: "/project-2.jpg",
    description:
      "A 5 kW on-grid rooftop solar system installed for an independent home to reduce monthly electricity bills with clean daytime generation.",
    specs: ["Type: On-Grid", "Solar PV Capacity: 5 kW", "Location: Whitefield"],
    tabs: [
      {
        label: "Project",
        image: "/project-2.jpg",
        description:
          "Residential on-grid solar setup planned around household daytime demand and available rooftop area.",
      },
      {
        label: "Solar PV",
        image: "/project-real-3.png",
        description:
          "Modules positioned for strong generation performance with practical walkways for future servicing.",
      },
    ],
  },
  {
    title: "Commercial Rooftop Solar for Office Campus",
    location: "Electronic City, Bengaluru",
    category: "Commercial",
    image: "/project-3.jpg",
    description:
      "Commercial rooftop solar for an office campus focused on daytime load offset, predictable energy costs, and long-term ROI.",
    specs: ["Type: Commercial Rooftop", "Focus: Daytime Load Offset", "Location: Electronic City"],
    tabs: [
      {
        label: "Project",
        image: "/project-3.jpg",
        description:
          "Campus rooftop array commissioned to support commercial daytime operations with clean solar generation.",
      },
      {
        label: "Array Detail",
        image: "/project-real-2.png",
        description:
          "Uniform module rows and structured cabling for reliable commercial plant performance.",
      },
    ],
  },
];
