import { JsonView, darkStyles } from 'react-json-view-lite';
import 'react-json-view-lite/dist/index.css';

interface JsonViewerProps {
    data: any;
}

export const JsonViewer: React.FC<JsonViewerProps> = ({ data }) => {
    return (
        <div className="w-full h-full text-left">
            <JsonView
                data={data}
                style={darkStyles}
            />
        </div>
    );
};