//Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
    const rem = s.replace(/!/g,'');
    return rem;
  }