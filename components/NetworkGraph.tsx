import * as d3 from "d3";
import {useEffect, useMemo} from "react";

interface Data {
    nodes: { id: number, name: string }[],
    links: { source: number, target: number }[]
}

export const NetworkDiagram = () => {
    const data= useMemo(() => {
        return {
            "nodes": [
                {
                    "id": 1,
                    "name": "A",
                    "image": "https://uzabase-edge.imgix.net/companies/203208/logo?auto=compress&mask=ellipse&fm=png&h=40&w=40&fit=clamp"
                },
                {
                    "id": 2,
                    "name": "B",
                    "image": "https://uzabase-edge.imgix.net/companies/203208/logo?auto=compress&mask=ellipse&fm=png&h=40&w=40&fit=clamp"
                },
                {
                    "id": 3,
                    "name": "C",
                    "image": "https://uzabase-edge.imgix.net/companies/203208/logo?auto=compress&mask=ellipse&fm=png&h=40&w=40&fit=clamp"
                },
                {
                    "id": 4,
                    "name": "D",
                    "image": "https://uzabase-edge.imgix.net/companies/203208/logo?auto=compress&mask=ellipse&fm=png&h=40&w=40&fit=clamp"
                },
                {
                    "id": 5,
                    "name": "E",
                    "image": "https://uzabase-edge.imgix.net/companies/203208/logo?auto=compress&mask=ellipse&fm=png&h=40&w=40&fit=clamp"
                },
                {
                    "id": 6,
                    "name": "F",
                    "image": "https://uzabase-edge.imgix.net/companies/203208/logo?auto=compress&mask=ellipse&fm=png&h=40&w=40&fit=clamp"
                },
                {
                    "id": 7,
                    "name": "G",
                    "image": "https://uzabase-edge.imgix.net/companies/203208/logo?auto=compress&mask=ellipse&fm=png&h=40&w=40&fit=clamp"
                },
                {
                    "id": 8,
                    "name": "H",
                    "image": "https://uzabase-edge.imgix.net/companies/203208/logo?auto=compress&mask=ellipse&fm=png&h=40&w=40&fit=clamp"
                },
                {
                    "id": 9,
                    "name": "I",
                    "image": "https://uzabase-edge.imgix.net/companies/203208/logo?auto=compress&mask=ellipse&fm=png&h=40&w=40&fit=clamp"
                },
                {
                    "id": 10,
                    "name": "J",
                    "image": "https://uzabase-edge.imgix.net/companies/203208/logo?auto=compress&mask=ellipse&fm=png&h=40&w=40&fit=clamp"
                }
            ],
            "links": [
                {
                    "source": 1,
                    "target": 2
                },
                {
                    "source": 1,
                    "target": 5
                },
                {
                    "source": 1,
                    "target": 6
                },
                {
                    "source": 2,
                    "target": 3
                },
                {
                    "source": 2,
                    "target": 7
                },
                {
                    "source": 3,
                    "target": 4
                },
                {
                    "source": 8,
                    "target": 3
                },
                {
                    "source": 4,
                    "target": 5
                },
                {
                    "source": 4,
                    "target": 9
                },
                {
                    "source": 5,
                    "target": 10
                }
            ]
        }
    }, [])

    useEffect(() => {
        // set the dimensions and margins of the graph
        const margin = {top: 10, right: 30, bottom: 30, left: 40},
            width = 400 - margin.left - margin.right,
            height = 400 - margin.top - margin.bottom;

        // append the svg object to the body of the page
        const svg = d3.select("#container")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform",
                `translate(${margin.left}, ${margin.top})`);

        const links: any = (data as Data).links
        const nodes: any = (data as Data).nodes
        // Initialize the links
        const link = svg
            .selectAll("line")
            .data(links)
            .join("line")
            .style("stroke", "#aaa")

        // Initialize the nodes
        const node = svg
            .selectAll("image")
            .data(nodes)
            .join("image")
            .attr("r", 20)
            .attr("xlink:href", function (d: any) {
                return d.image
            })
            /*.style("filter", function (d: any) {
                console.log(d);
                return d.image ? "url(#" + d.image + ")" : "#000";
        })*/


        // Let's list the force we wanna apply on the network
        const simulation = d3.forceSimulation(nodes)                 // Force algorithm is applied to data.nodes
            .force("link", d3.forceLink()                               // This force provides links between nodes
                .id(function(d: any) { return d.id; })                     // This provide  the id of a node
                .links(links)                                    // and this the list of links
            )
            .force("charge", d3.forceManyBody().strength(-400))         // This adds repulsion between nodes. Play with the -400 for the repulsion strength
            .force("center", d3.forceCenter(width / 2, height / 2))     // This force attracts nodes to the center of the svg area
            .on("end", ticked);

        // This function is run at each iteration of the force algorithm, updating the nodes position.
        function ticked() {
            link
                .attr("x1", function(d: any) { return d.source.x; })
                .attr("y1", function(d: any) { return d.source.y; })
                .attr("x2", function(d: any) { return d.target.x; })
                .attr("y2", function(d: any) { return d.target.y; });

            node
                .attr("x", function (d:any) { return d.x-20; })
                .attr("y", function(d: any) { return d.y-20; });
        }
    }, [data])



    return (
        <div>
            <div id="container"></div>
            <div>
                <img src="https://uzabase-edge.imgix.net/companies/203208/logo?auto=compress&mask=ellipse&fm=png&h=40&w=40&fit=clamp"  alt={`test`}/>
            </div>
        </div>
    );
};