import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { sendMessageCreator } from "../../redux/dialogues-reducer";
import Dialogues from "./Dialogues";

let mapStateToProps = (state) => {
  return {
    dialogues_page: state.dialogues_page,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    send_message: (newMessageText) => {
      dispatch(sendMessageCreator(newMessageText));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogues);
