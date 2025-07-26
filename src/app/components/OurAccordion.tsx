import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Tooltip,
  Typography,
} from "@mui/material";
import type { WorkflowAccordion } from "@/app/data";

export default function OurAccordion({
  workflowId,
  workflow,
  isVisible,
  tooltipTitle,
}: {
  workflowId: string;
  workflow: WorkflowAccordion | undefined;
  isVisible: boolean;
  tooltipTitle: string | null;
}) {
  return (
    <span key={workflowId}>
      <Tooltip title={tooltipTitle} placement="right">
        <Accordion key={workflowId} disabled={!isVisible}>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls={`${workflowId}-content`}
            id={`${workflowId}-header`}
            key={`${workflowId}-summary`}
          >
            <Typography
              component="span"
              sx={{ color: isVisible ? "black" : "gray" }}
            >
              {isVisible ? (
                workflow?.title
              ) : (
                <span style={{ textDecoration: "line-through" }}>
                  {workflowId}
                </span>
              )}{" "}
              <Typography
                variant="subtitle2"
                component="span"
                sx={{ color: "#9c27b0" }}
              >
                ({workflowId})
              </Typography>
            </Typography>
          </AccordionSummary>
          <AccordionDetails key={`${workflowId}-details`}>
            <Typography>{workflow?.content}</Typography>
          </AccordionDetails>
        </Accordion>
      </Tooltip>
    </span>
  );
}
