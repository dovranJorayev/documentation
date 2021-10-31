import React from "react";
// eslint-disable-next-line import/no-unresolved
import OriginalDocItemFooter from "@theme-original/DocItemFooter";
import { DocFeedback } from "@site/src/features/feedback/doc";
import { hasExp, DOC_FEEDBACK_WIDGET } from "@site/src/entities/exp";
import styles from "./styles.module.css";

/**
 * DocItemFooter
 * @swizzled unsafe: higher breaking change risk (keep actual!)
 * @remark Couple to original DocItemFooter for more stability
 * @see https://docusaurus.io/docs/next/using-themes#for-site-owners
 */
function DocItemFooter(props) {
    return (
        <>
            <OriginalDocItemFooter {...props} />
            {hasExp(DOC_FEEDBACK_WIDGET) && <DocFeedback className={styles.feedback} />}
        </>
    );
}

export default DocItemFooter;
