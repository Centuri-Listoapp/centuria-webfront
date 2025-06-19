import React, { useEffect, useRef } from "react";
import styles from "./dialog.module.css";
import Button from "../button/Button";

type DialogProps = {
  open: boolean;
  onClose: Function;
  children: React.ReactNode;
  width?: string | number;
  title?: string;
  close?: boolean;
};

const Dialog = (props: DialogProps) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!props.open) {
      dialogRef.current!.children[0].classList.remove(styles["show-backdrop"]);
      dialogRef.current!.children[1].classList.remove(styles["show-container"]);
      setTimeout(() => {
        dialogRef.current!.classList.remove("show-dialog");
      }, 200);
      // document.body.style.overflow = "auto";
    } else {
      dialogRef.current!.classList.add("show-dialog");
      setTimeout(() => {
        dialogRef.current!.children[0].classList.add(styles["show-backdrop"]);
        dialogRef.current!.children[1].classList.add(styles["show-container"]);
      }, 50);
      // document.body.style.overflow = "hidden";
    }
  }, [props.open]);

  const handleClose = () => {
    props.onClose();
  };

  return (
    <div className={styles.root} ref={dialogRef} data-dialog>
      <div className={styles.backdrop} onClick={() => handleClose()}></div>
      <div className={styles.container} style={{ maxWidth: props.width }}>
        {props.title && (
          <div className={styles["title-container"]}>
            <h3>{props.title}</h3>
          </div>
        )}
        <div className={styles["body"]}>{props.children}</div>
        {props.close && (
          <div className={styles["actions"]}>
            <Button onClick={() => handleClose()}>Cerrar</Button>
          </div>
        )}
        <div className={styles["dialog-close"]} onClick={() => handleClose()}>
          &times;
        </div>
      </div>
    </div>
  );
};

export default Dialog;
