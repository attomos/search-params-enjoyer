import OurAccordion from "@/app/components/OurAccordion";
import { getWorkflowAccordions } from "@/app/data";
import styles from "@/app/page.module.css";

export default function MainSection({
  visibleWorkflows,
  slug,
}: {
  visibleWorkflows: string[];
  slug: string;
}) {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {visibleWorkflows
          .filter((wfId) => wfId.trim() !== "")
          .map((workflowId) => {
            const workflow = getWorkflowAccordions(slug).find(
              (item) => item.id === workflowId
            );
            const isVisible = workflow !== undefined;

            const tooltipTitle = isVisible
              ? null
              : "Workflow does not exist in this branch...";

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
