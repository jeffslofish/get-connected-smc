import React from 'react';
import {__t} from '../__t';

class SurveyResults extends React.Component {
    render() {

       // TODO: Do we need to specify why they qualify, or just that they qualify?
      // let msg = '';
      // let results = this.props.resultData;
      // if (results) {
      //     let resultData = results.data;
      //
      //     let respondentIncome = Number.parseInt(resultData.income, 10);
      //     let maxYearlyIncomeBasedOnNumPeople = 12060 + ((resultData.numFamilyMembers - 1) * 4180) * 1.85;
      //
      //     if (respondentIncome <= maxYearlyIncomeBasedOnNumPeople) {
      //         if (resultData.underFive === 'Y') {
      //             msg = 'Your family qualifies because of your income and you have a child under 5.';
      //
      //         } else if (resultData.isCalFreshMediCal === 'Y') {
      //             msg = 'Your family qualifies because of your income and you participated in CalFresh or MediCal in the last year.';
      //
      //         } else if (resultData.pregnant === 'Y') {
      //             msg = 'Your family qualifies because of your income a member of your immediate family is pregnant.';
      //
      //         } else {
      //             msg = "Sorry. You do not qualify because your family currently does not have a child under 5 and has not participated in CalFresh or Medial in the past year.";
      //
      //         }
      //     } else {
      //         msg = "Sorry. You do not qualify due to your income.";
      //
      //     }
      // }
      // return (<p>{msg}</p>);

      let resultsMessage = [];
      if (this.props.eligibleFor) {
        if (this.props.eligibleFor.length >= 1) {
          for (let programs of this.props.eligibleFor) {
            for (let program of programs) {
              resultsMessage.push(__t(program));
            }
          }
        } else {
          resultsMessage = __t('not.eligible');
        }
      }

      return <div>{resultsMessage.join(',')}</div>;
    }
}

export default SurveyResults;