import ShowsList from "../Shows/ShowsList";
import ShowsSlideShow from "../Shows/ShowsSlideShow";

export const Index = ({darkMode}) => {
    return (
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ShowsSlideShow />
            <ShowsList darkMode={darkMode} />
        </div>
    );
};