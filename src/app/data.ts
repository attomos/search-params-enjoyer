export type WorkflowAccordion = {
  id: string;
  title: string;
  content: string;
};

type Obj = {
  [slug: string]: WorkflowAccordion[];
};

export const workflowAccordions: Obj = {
  main: [
    {
      id: "workflow-aaa",
      title: "Workflow AAA",
      content: "You get the idea",
    },
    {
      id: "related-workflow-maybe",
      title: "Related Workflow Maybe",
      content: "You get the idea",
    },
    {
      id: "random-workflow",
      title: "Random Workflow for Something",
      content: "You get the idea",
    },
    {
      id: "sub-workflow-aaa",
      title: "Sub-workflow of Workflow AAA",
      content: "You get the idea",
    },
    {
      id: "some-other-workflow",
      title: "Some Other Workflow",
      content: "You get the idea",
    },
  ],
  "feature-1": [
    {
      id: "workflow-aaa",
      title: "Workflow AAA",
      content: "You get the idea",
    },
    {
      id: "related-workflow-maybe",
      title: "Related Workflow Maybe",
      content: "You get the idea",
    },
    {
      id: "random-workflow",
      title: "Random Workflow for Something",
      content: "You get the idea",
    },
    {
      id: "sub-workflow-aaa",
      title: "Sub-workflow of Workflow AAA",
      content: "You get the idea",
    },
    {
      id: "some-other-workflow",
      title: "Some Other Workflow",
      content: "You get the idea",
    },
    {
      id: "wip-wf",
      title: "WIP New Workflow",
      content: "You get the idea",
    },
    {
      id: "wip-sub-wf1",
      title: "WIP Sub-workflow 1",
      content: "You get the idea",
    },
    {
      id: "wip-sub-wf2",
      title: "WIP Sub-workflow 2",
      content: "You get the idea",
    },
  ],
};

export const getWorkflowAccordions = (slug: string) => {
  return workflowAccordions[slug] || [];
};
