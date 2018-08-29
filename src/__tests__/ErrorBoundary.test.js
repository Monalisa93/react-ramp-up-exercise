import ErrorBoundary from '../components/ErrorBoundary';

const Child = () => {
    throw "error";
};

it('catches error and displays message', () => {
    const wrapper = mount(
        <ErrorBoundary render={() => <span>Oops! Error</span>}>
            <Child/>
        </ErrorBoundary>
    );

    const text = wrapper.text();
    expect(text).toEqual('Oops! Error');

});