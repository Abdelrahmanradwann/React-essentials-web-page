

export default function Tabs({ buttons, children, container = 'menu' }) {
    // C in Container should be capital cuz if it is small react will look for built in container
    let Container = container   
    return (
        <>
            <Container>
                {buttons}
            </Container>
            {children}
        </>

    )

}