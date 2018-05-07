const h = (tagName, props = {}, ...children) => ({tagName, props, children});

const ConnectedComponent = ({connect, receiver, origProps = {}, child = null}, setProps) => child;

ConnectedComponent.willMount = function() {
	connect((subscribe, dispatch) => {
		this.setProps({
			child: receiver(origProps, {subscribe, dispatch})
		});
	});
};

const createObserve = connect => receiver => origProps => ({
	tagName: ConnectedComponent,
	props: { connect, receiver, origProps },
	children: []
});

module.exports = createObserve;