import React, { Component, RefObject } from 'react';
import { OpenSheetMusicDisplay as OSMD, IOSMDOptions } from 'opensheetmusicdisplay';

type Props = {
  options: IOSMDOptions
  file: string | Document
}

type State = {}

export class SheetMusicViewer extends Component<Props, State> {
  osmd: InstanceType<typeof OSMD> = new OSMD(document.body)
  divRef: RefObject<HTMLDivElement>
  constructor(props: Props) {
    super(props);
    this.divRef = React.createRef();
  }

  setupOsmd() {
    if (this.divRef.current) {
      this.osmd = new OSMD(this.divRef.current, this.props.options);
      this.osmd.load(this.props.file).then(() => this.osmd.render());
    }
  }

  resize() {
    this.forceUpdate();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize)
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.options.drawTitle !== prevProps.options.drawTitle) {
      this.setupOsmd();
    }
    if(this.props.file !== prevProps.file){
      this.osmd.load(this.props.file).then(() => this.osmd.render());
    }
  }

  componentDidMount() {
    this.setupOsmd();
    window.addEventListener('resize', this.resize) 
  }

  render() {
    return (<div ref={this.divRef} />);
  }
}