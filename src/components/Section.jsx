
                                             /// ... here is to collect rem properties into object
export default function Section({ title, children, ...props }) {
    /// {...props} ... here is to collect spread the properties from the object
    return (
        <section {...props}>        
            <h2>{title}</h2>
            {children}
        </section>
    )
    
}