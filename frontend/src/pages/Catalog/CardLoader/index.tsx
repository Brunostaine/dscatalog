import ContentLoader from "react-content-loader";

import "./styles.css";

const CardLoader = () => (
    <div className="card-loader-container">
        <ContentLoader
            speed={1}
            width={320}
            height={460}
            viewBox="0 0 320 460"
            backgroundColor="#ebeaea"
            foregroundColor="#dedede"
        >
            <rect x="0" y="0" rx="2" ry="2" width="300" height="300" />
        </ContentLoader>
    </div>
);

export default CardLoader;
