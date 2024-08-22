import {useMemo} from "react";
import CytoscapeComponent from "react-cytoscapejs";
import Cytoscape, {ElementDefinition} from 'cytoscape';
import cola from 'cytoscape-cola';

export const NetworkGraphCytoscape = () => {
    Cytoscape.use(cola)
    const elements: ElementDefinition[] = useMemo(() => {
        return [
            {
                data: {
                    id: 'segment_a',
                    label: 'Segment A',
                },
                style: {
                    'background-color': '#ae7cd6',
                },
                group: "nodes",
            },
            {
                data: {
                    id: 'incumbents',
                    label: 'Incumbents',
                },
                style: {
                    'background-color': '#cfcfcf',
                },
                group: "nodes",
            },
            {
                data: {
                    id: 'segment_b',
                    label: 'Segment B',
                },
                style: {
                    'background-color': '#cee0f2',
                },
                group: "nodes",
            },
            {
                data: {
                    id: 'segment_c',
                    label: 'Segment C',
                },
                style: {
                    'background-color': '#edffee',
                },
                group: "nodes",
            },
            {
                data: {
                    id: 'stc_group',
                    label: 'STC Group',
                    parent: 'segment_a'
                },
                style: {
                    'background-image': `url(https://uzabase-edge.imgix.net/companies/2633509/logo?auto=compress&mask=ellipse&fm=png&h=40&w=40&fit=clamp")`,
                },
                group: "nodes",
            },
            {
                data: {
                    id: 'megaport',
                    label: 'Megaport',
                    parent: 'segment_a'
                },
                style: {
                    'background-image': `url("https://uzabase-edge.imgix.net/companies/244000/logo?auto=compress&mask=ellipse&fm=png&h=40&w=40&fit=clamp")`
                },
                group: "nodes",
            },
            {
                data: {
                    id: 'redhat',
                    parent: 'incumbents'
                },
                style: {
                    'background-image': 'url("https://uzabase-edge.imgix.net/companies/6078/logo?auto=compress&mask=ellipse&fm=png&h=80&w=80&fit=clamp")',
                    'width': '80px',
                    'height': '80px',
                },
                group: "nodes",
            },
            {
                data: {
                    id: 'ntt',
                    parent: 'incumbents'
                },
                style: {
                    'background-image': 'url("https://uzabase-edge.imgix.net/companies/1345397/logo?auto=compress&mask=ellipse&fm=png&h=60&w=60&fit=clamp")',
                    'width': '60px',
                    'height': '60px',
                },
                group: "nodes",
            },
            {
                data: {
                    id: 'cisco',
                    parent: 'incumbents'
                },
                style: {
                    'background-image': 'url("https://uzabase-edge.imgix.net/companies/40/logo?auto=compress&mask=ellipse&fm=png&h=60&w=60&fit=clamp")',
                    'width': '60px',
                    'height': '60px'
                },
                group: "nodes",
            },
            {
                data: {
                    id: 'amazon',
                    parent: 'incumbents'
                },
                style: {
                    'background-image': 'url("https://uzabase-edge.imgix.net/companies/203208/logo?auto=compress&mask=ellipse&fm=png&h=80&w=80&fit=clamp")',
                    'width': '80px',
                    'height': '80px',
                },
                group: "nodes",
            },
            {
                data: {
                    id: 'docker',
                    label: 'Docker',
                    parent: 'segment_c'
                },
                style: {
                    'background-image': 'url("https://uzabase-edge.imgix.net/companies/131712/logo?auto=compress&mask=ellipse&fm=png&h=40&w=40&fit=clamp")'
                },
                group: "nodes",
            },
            {
                data: {
                    id: 'singlestore',
                    label: 'Singlestore',
                    parent: 'segment_c'
                },
                style: {
                    'background-image': 'url("https://uzabase-edge.imgix.net/companies/64001/logo?auto=compress&mask=ellipse&fm=png&h=40&w=40&fit=clamp")'
                },
                group: "nodes",
            },
            {
                data: {
                    id: 'hashicorp',
                    label: 'Hashicorp',
                    parent: 'segment_c'
                },
                style: {
                    'background-image': 'url("https://uzabase-edge.imgix.net/companies/252953/logo?auto=compress&mask=ellipse&fm=png&h=40&w=40&fit=clamp")'
                },
                group: "nodes",
            },
            {
                data: {
                    id: 'canonical',
                    label: 'Canonical',
                    parent: 'segment_c'
                },
                style: {
                    'background-image': 'url("https://uzabase-edge.imgix.net/companies/37374/logo?auto=compress&mask=ellipse&fm=png&h=40&w=40&fit=clamp")'
                },
                group: "nodes",
            },
            {
                data: {
                    id: 'stc_group-redhat',
                    source: 'stc_group',
                    target: 'redhat'
                },
                style: {
                    'line-color': '#13C0A8',
                    'width': 3,
                    'line-style': 'dashed',
                },
                group: "edges",
            },
            {
                data: {
                    id: 'redhat-ntt',
                    source: 'redhat',
                    target: 'ntt'
                },
                style: {
                    'line-color': '#1E7EDD',
                    'width': 3,
                    'line-style': 'solid',
                },
                group: "edges",
            },
            {
                data: {
                    id: 'redhat-docker',
                    source: 'redhat',
                    target: 'docker'
                },
                style: {
                    'line-color': '#13C0A8',
                    'width': 3,
                    'line-style': 'dashed',
                },
                group: "edges",
            },
            {
                data: {
                    id: 'megaport-cisco',
                    source: 'megaport',
                    target: 'cisco'
                },
                style: {
                    'line-color': '#13C0A8',
                    'width': 3,
                    'line-style': 'dashed',
                },
                group: "edges",
            },
            {
                data: {
                    id: 'amazon-singlestore',
                    source: 'amazon',
                    target: 'singlestore'
                },
                style: {
                    'line-color': '#13C0A8',
                    'width': 3,
                    'line-style': 'dashed',
                },
                group: "edges",
            },
            {
                data: {
                    id: 'amazon-hashicorp',
                    source: 'amazon',
                    target: 'hashicorp'
                },
                style: {
                    'line-color': '#13C0A8',
                    'width': 3,
                    'line-style': 'dashed',
                },
                group: "edges",
            },
            {
                data: {
                    id: 'amazon-canonical',
                    source: 'amazon',
                    target: 'canonical',
                },
                style: {
                    'line-color': '#13C0A8',
                    'width': 3,
                    'line-style': 'dashed',
                },
                group: "edges",
            }
        ];
    }, [])

    const layout = {
        name: 'cola',
        nodeDimensionsIncludeLabels: true,
        avoidOverlap: true,
    };

    const style =  {
            width: '1500px',
            height: '1500px',
        }

    const stylesheet = [
       {
            selector: 'node',
            style: {
                'label': 'data(label)'
            }
        }
    ]

    return (
        <>
            <div>
                <CytoscapeComponent elements={elements} layout={layout} stylesheet={stylesheet} style={style} />
            </div>
        </>
    )
}