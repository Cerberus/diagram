# Graphsource

Diagram is the tool for making node based systems. Define your own behaviour of this react based diagram system and create your tool. Visual programming is trending right now so this is a good basis.

Providing highest level of abstracion and theming `graphsource` is the most powerful package around the ecosystem. This package contains no dependencies!

[Project Page](https://diagram.graphqleditor.com)

## Live demo

Here is [Live Demo](https://app.graphqleditor.com) of diagram used to create node based graphql system


## Develop & Contribute

```sh
$ git clone https://github.com/slothking-online/diagram
$ npm install
$ npm run start
```

## Creating new nodes

Press RMB to open menu pointing on diagram

## Add to your project

```sh
$ npm install graphsource
```

## Usage in project

```ts
import { Diagram, NodeDefinition, AcceptedNodeDefinition } from 'graphsource'
this.diagram = new Diagram(document.getElementById("root"));
const createOND = (name: string): NodeDefinition["node"] => ({
  name: `${name}Node`,
  description: `${name} object node`,
  inputs: [],
  outputs: []
});
const options: NodeOption[] = [
  {
    name: "required",
    help:
      "Check this if this node is required for creation of the type or is required in input | interface"
  },
  {
    name: "array",
    help:
      "Check this if you want a list here for example 'Hello' is a String however ['Hello', 'Me', 'World', 'Sloth'] its an array of strings"
  }
];
this.diagram!.setDefinitions([
  {
    type: "dummy",
    help: "Hello I am dummy node this is help I do display",
    node: createOND("dummy"),
    options,
    root: true,
    acceptsInputs: (d, defs) =>
      defs.map(
        def =>
          ({
            definition: def
          } as AcceptedNodeDefinition)
      ),
    acceptsOutputs: (d, defs) =>
      defs.map(
        def =>
          ({
            definition: def
          } as AcceptedNodeDefinition)
      )
  }
]);
```

## Listening to diagram events

It's possible to attach to certain events that occur inside the diagram.
You can do it by using familiar `.on()` syntax, e.g.:

```
this.diagram = new Diagram(/* ... */);
/* ... */
this.diagram.on(EVENT_NAME, () => {
  // callback
});
```

Here is the list of all subscribable events:
*) *DataModelChanged* - fires when a data model (nodes, links placement and content) was changed
*) *ViewModelChanged* - fires when a view model (pan, zoom) was changed
*) *NodeMoving* - fires when node is being moved
*) *NodeMoved* - fires when node stops being moved
*) *NodeSelected* - fires when node(s) was selected
*) *NodeCreated* - fires when node was created
*) *NodeDeleted* - fires when node was deleted
*) *NodeChanged* - fires when node was modified
*) *LinkCreated* - fires when a link was created
*) *LinkDeleted* - fires when a link was deleted
*) *LinkMoved* - fires when a link stops being moved
*) *UndoRequested* - fires when undo was requested
*) *RedoRequested* - fires when redo was requested

You can unsubscribe your listener either by using `.off()`, or by invoking unsubscriber function that is being returned from `.on()`:

```
this.diagram = new Diagram(/* ... */);
const callback = (nodeList) => {
  console.log('Nodes are moving!', nodeList);
};
this.diagram.on('NodeMoving', callback); // callback will be fired
// ...
this.diagram.off('NodeMoving', callback); // callback will not be fired anymore
```

```
this.diagram = new Diagram(/* ... */);
const callback = () => {
  console.log('node moving!');
};
const unsubscriber = this.diagram.on('NodeMoving', callback); // callback will be fired
// ...
unsubscriber(); // callback will not be fired anymore
```

## Docs

To generate docs simply type:
```
npm run docs
```


### Controls

* Create - press and hold right mouse button and choose node -> Left Mouse Button click
* Pan - press and hold Left Mouse Button and move mouse
* Move - press and hold Left Mouse Button on node
* RIGHT MOUSE CLICK on node - node actions
* CLICK ON NODE INPUT - open new nodes menu
* Rename - To rename node simply start typing when one node is selected
* Rename description - To rename node description clik right mouse button on node and click renameDescription
* SHIFT + Left Mouse Button Click - select multiple nodes
* Delete - Click delete button when node/nodes are selected or right click -> delete

## Contribute

Feel free to contact us and contribute in graphql editor project. artur@graphqleditor.com

1.  fork this repo
2.  Create your feature branch: git checkout -b feature-name
3.  Commit your changes: git commit -am 'Add some feature'
4.  Push to the branch: git push origin my-new-feature
5.  Submit a pull request
