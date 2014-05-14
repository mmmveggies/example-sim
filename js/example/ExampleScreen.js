// Copyright 2002-2013, University of Colorado Boulder

/**
 * The 'Bar Magnet' screen. Conforms to the contract specified in joist/Screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // modules
  var ExampleModel = require( 'EXAMPLE_SIM/example/model/ExampleModel' );
  var ExampleView = require( 'EXAMPLE_SIM/example/view/ExampleView' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Screen = require( 'JOIST/Screen' );

  // strings
  var exampleSimString = require( 'string!EXAMPLE_SIM/example-sim.name' );

  function ExampleScreen() {
    Screen.call( this, exampleSimString, null /* no icon, single-screen sim */,
      function() { return new ExampleModel(); },
      function( model ) { return new ExampleView( model ); },
      { backgroundColor: 'rgb(50,50,50)' }
    );
  }

  return inherit( Screen, ExampleScreen );
} );