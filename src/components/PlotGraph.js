import Plot from 'react-plotly.js';

export const PlotGraph = ({data, layout}) => {
  return (
    <Plot
      data={data}
      layout={layout}
      // frames={this.state.frames}
      // config={this.state.config}
      // onInitialized={(figure) => this.setState(figure)}
      // onUpdate={(figure) => this.setState(figure)}
    />
  )
};

export default PlotGraph;