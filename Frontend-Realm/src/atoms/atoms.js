import {atom} from "recoil"

const otherNameState = atom({
    key: 'otherNameState', 
    default: '', 
  });
  const otherCollegeState = atom({
    key: 'otherCollegeState', 
    default: '', 
  });
  const otherSIDState = atom({
    key: 'otherSIDState', 
    default: '', 
  });
  const otherBranchState = atom({
    key: 'otherBranchState', 
    default: '', 
  });
  const otherGraduationYearState = atom({
    key: 'otherGraduationYearState', 
    default: '', 
  });
  const otherEmailState = atom({
    key: 'otherEmailState', 
    default: '', 
  });

  export {otherBranchState,otherCollegeState,otherEmailState,otherGraduationYearState,otherNameState,otherSIDState}
  