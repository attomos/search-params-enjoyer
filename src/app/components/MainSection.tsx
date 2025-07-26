import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Tooltip,
  Typography,
} from "@mui/material";
import { workflowAccordions } from "@/app/data";
import styles from "@/app/page.module.css";
import OurAccordion from "@/app/components/OurAccordion";

export default function MainSection({
  visibleWorkflows,
}: {
  visibleWorkflows: string[];
}) {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {visibleWorkflows
          .filter((wfId) => wfId.trim() !== "")
          .map((workflowId) => {
            const workflow = workflowAccordions.find(
              (item) => item.id === workflowId
            );
            const isVisible = workflow !== undefined;

            const tooltipTitle = isVisible
              ? null
              : "Workflow does not exist here...";

            return (
              <OurAccordion
                key={workflowId}
                workflowId={workflowId}
                workflow={workflow}
                isVisible={isVisible}
                tooltipTitle={tooltipTitle}
              />
            );
          })}
      </main>
    </div>
  );
}
