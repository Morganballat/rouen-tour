import { connect } from 'react-redux';
import Parks from '../../components/Activities/Parks';

const mapStateToProps = (state) => ({
	parks: state.activities.parks,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Parks);
