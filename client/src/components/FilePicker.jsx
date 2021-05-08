import React, { useMemo } from "react";
import isArray from "lodash/fp/isArray";
import isString from "lodash/fp/isString";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: "0"
  },
  input: {
    display: "none"
  },
  label: {},
  button: {}
}));

const acceptVariants = {
  word:
    ".pdf,.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  images: "image/*",
  excel:
    ".xlsx,.xls,.csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
};

const makeAcceptString = accept => {
  if (!accept || !accept.length) {
    return "";
  }

  if (isString(accept)) {
    return acceptVariants[accept] ? acceptVariants[accept] : accept;
  }

  if (isArray(accept)) {
    const len = accept.length;
    return accept.reduce((acc, curr, currIndex) => {
      if (acceptVariants[curr]) {
        acc += acceptVariants[curr];
      } else if (curr && curr.length && curr.trim().length) {
        acc += curr.trim();
      }

      if (len > 1 && currIndex < len - 1) {
        acc += ",";
      }

      return acc;
    }, "");
  }

  return "";
};

const FileInput = ({
  accept,
  multiple = false,
  id = "file-input",
  inputProps,
  labelProps,
  buttonProps,
  onChange,
  label = "Add Image"
}) => {
  const classes = useStyles();

  const acceptString = useMemo(() => makeAcceptString(accept), [accept]);

  return (
    <>
      <FormControl className={classes.formControl}>
        <input
          id={id}
          accept={acceptString}
          className={classes.input}
          multiple={multiple}
          type="file"
          onChange={onChange}
          {...inputProps}
        />
        <label className={classes.label} htmlFor={id} {...labelProps}>
          <Button
            variant="contained"
            component="span"
            className={classes.button}
            {...buttonProps}
          >
            {label}
          </Button>
        </label>
      </FormControl>
    </>
  );
};

export default FileInput;
