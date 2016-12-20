const h = (tagName, props = {}, ...children) => ({tagName, props, children});

const ConnectedComponent = ({connect, receiver, origProps = {}, child = null}, setProps) => {
	connect((subscribe, dispatch) => {
		setProps({
			child: receiver(origProps, {subscribe, dispatch})
		});
	});

	return child;
};

const createObserve = connect => receiver => origProps => ({
	tagName: ConnectedComponent,
	props: { connect, receiver, origProps },
	children: []
});

module.exports = createObserve;