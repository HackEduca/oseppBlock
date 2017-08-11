'use strict';
var blockToolboxXml=
'<xml xmlns="http://www.w3.org/1999/xhtml">'+
'    <category name="Control" colour="#FFAB19" secondaryColour="#CF8B17">'+
'      <block type="control_if"/>'+
'      <block type="control_if">'+
'        <mutation else="1"/>'+
'      </block>'+
'      <block type="control_forloop">'+
'      </block>'+
'      <block type="control_while"/>'+
'      <block type="control_break"/>'+
'      <block type="control_delay">'+
'        <value name="ms">'+
'          <shadow type="math_number">'+
'            <field name="NUM">1000</field>'+
'          </shadow>'+
'        </value>'+
'      </block>'+
'      <block type="control_delaymicroseconds">'+
'        <value name="us">'+
'          <shadow type="math_number">'+
'            <field name="NUM">1000</field>'+
'          </shadow>'+
'        </value>'+
'      </block>'+
'      <block type="math_boolean_menu"/>'+
'      <block type="control_micros"/>'+
'      <block type="control_millis"/>'+
'    </category>'+
'    <category name="Procedure" colour="#1f9999" secondaryColour="#2a8c8c" custom="PROCEDURE"/>'+
'    <category name="Arduino IO" colour="#4C97FF" secondaryColour="#3373CC">'+
'      <block type="io_pinmode">'+
'        <field name="mode">OUTPUT</field>'+
'        <value name="Pin">'+
'          <shadow type="io_arduino_uno_digitalpin_menu">'+
'            <field name="Pin">0</field>'+
'          </shadow>'+
'        </value>'+
'      </block>'+
'      <block type="io_readdigitalpin">'+
'        <value name="Pin">'+
'          <shadow type="io_arduino_uno_digitalpin_menu">'+
'            <field name="Pin">0</field>'+
'          </shadow>'+
'        </value>'+
'      </block>'+
'      <block type="io_writedigitalpin">'+
'        <value name="Pin">'+
'          <shadow type="io_arduino_uno_digitalpin_menu">'+
'            <field name="Pin">0</field>'+
'          </shadow>'+
'        </value>'+
'        <value name="value">'+
'          <shadow type="io_pinstate_menu">'+
'            <field name="state">HIGH</field>'+
'          </shadow>'+
'        </value>'+
'      </block>'+
'      <block type="io_readanalogpin">'+
'        <value name="Pin">'+
'          <shadow type="io_arduino_uno_analogpin_menu">'+
'            <field name="Pin">A0</field>'+
'          </shadow>'+
'        </value>'+
'      </block>'+
'      <block type="io_writeanalogpin">'+
'        <value name="Pin">'+
'          <shadow type="io_arduino_uno_pwmpin_menu">'+
'            <field name="Pin">3</field>'+
'          </shadow>'+
'        </value>'+
'        <value name="value">'+
'          <shadow type="math_whole_number">'+
'            <field name="NUM">0</field>'+
'          </shadow>'+
'        </value>'+
'      </block>'+
'      <block type="instance_serial">'+
'        <field name="Bandrate">115200</field>'+
'      </block>'+
'      <block type="serial_print">'+
'        <value name="value">'+
'          <shadow type="text">'+
'            <field name="TEXT">hello!</field>'+
'          </shadow>'+
'        </value>'+
'      </block>'+
'      <block type="serial_available"/>'+
'      <block type="serial_read"/>'+
'      <block type="io_tone">'+
'        <value name="frequency">'+
'          <shadow type="io_tone_menu">'+
'            <field name="Tone">131</field>'+
'          </shadow>'+
'        </value>'+
'        <value name="Pin">'+
'          <shadow type="io_arduino_uno_digitalpin_menu">'+
'            <field name="Pin">0</field>'+
'          </shadow>'+
'        </value>'+
'      </block>'+
'      <block type="io_notone">'+
'        <value name="Pin">'+
'          <shadow type="io_arduino_uno_digitalpin_menu">'+
'            <field name="Pin">0</field>'+
'          </shadow>'+
'        </value>'+
'      </block>'+
'      <block type="io_pulsein">'+
'        <value name="Pin">'+
'          <shadow type="io_arduino_uno_digitalpin_menu">'+
'            <field name="Pin">0</field>'+
'          </shadow>'+
'        </value>'+
'        <value name="value">'+
'          <shadow type="io_pinstate_menu">'+
'            <field name="state">HIGH</field>'+
'          </shadow>'+
'        </value>'+
'        <value name="timeout">'+
'          <shadow type="math_whole_number">'+
'            <field name="NUM">100</field>'+
'          </shadow>'+
'        </value>'+
'      </block>'+
'      <block type="io_pinstate_menu"/>'+
'    </category>'+
'    <category name="Operators" colour="#CF8B17" secondaryColour="#CF8B17">'+
'      <block type="arithmeticoperators">'+
'        <field name="Operators">+</field>'+
'        <value name="NUM1">'+
'          <shadow type="math_number">'+
'            <field name="NUM">0</field>'+
'          </shadow>'+
'        </value>'+
'        <value name="NUM2">'+
'          <shadow type="math_number">'+
'            <field name="NUM">0</field>'+
'          </shadow>'+
'        </value>'+
'      </block>'+
'      <block type="arithmeticoperators">'+
'        <field name="Operators">-</field>'+
'        <value name="NUM1">'+
'          <shadow type="math_number">'+
'            <field name="NUM">0</field>'+
'          </shadow>'+
'        </value>'+
'        <value name="NUM2">'+
'          <shadow type="math_number">'+
'            <field name="NUM">0</field>'+
'          </shadow>'+
'        </value>'+
'      </block>'+
'      <block type="arithmeticoperators">'+
'        <field name="Operators">*</field>'+
'        <value name="NUM1">'+
'          <shadow type="math_number">'+
'            <field name="NUM">0</field>'+
'          </shadow>'+
'        </value>'+
'        <value name="NUM2">'+
'          <shadow type="math_number">'+
'            <field name="NUM">0</field>'+
'          </shadow>'+
'        </value>'+
'      </block>'+
'      <block type="arithmeticoperators">'+
'        <field name="Operators">/</field>'+
'        <value name="NUM1">'+
'          <shadow type="math_number">'+
'            <field name="NUM">0</field>'+
'          </shadow>'+
'        </value>'+
'        <value name="NUM2">'+
'          <shadow type="math_number">'+
'            <field name="NUM">0</field>'+
'          </shadow>'+
'        </value>'+
'      </block>'+
'      <block type="comparisonoperators">'+
'        <field name="Operators">==</field>'+
'        <value name="NUM1">'+
'          <shadow type="math_number">'+
'            <field name="NUM">0</field>'+
'          </shadow>'+
'        </value>'+
'        <value name="NUM2">'+
'          <shadow type="math_number">'+
'            <field name="NUM">0</field>'+
'          </shadow>'+
'        </value>'+
'      </block>'+
'      <block type="comparisonoperators">'+
'        <field name="Operators">&lt;</field>'+
'        <value name="NUM1">'+
'          <shadow type="math_number">'+
'            <field name="NUM">0</field>'+
'          </shadow>'+
'        </value>'+
'        <value name="NUM2">'+
'          <shadow type="math_number">'+
'            <field name="NUM">0</field>'+
'          </shadow>'+
'        </value>'+
'      </block>'+
'      <block type="comparisonoperators">'+
'        <field name="Operators">&gt;</field>'+
'        <value name="NUM1">'+
'          <shadow type="math_number">'+
'            <field name="NUM">0</field>'+
'          </shadow>'+
'        </value>'+
'        <value name="NUM2">'+
'          <shadow type="math_number">'+
'            <field name="NUM">0</field>'+
'          </shadow>'+
'        </value>'+
'      </block>'+
'      <block type="booleanoperators">'+
'        <field name="Operators">&amp;&amp;</field>'+
'      </block>'+
'      <block type="notoperators"/>'+
'      <block type="mathrandom">'+
'        <value name="L">'+
'          <shadow type="math_number">'+
'            <field name="NUM">0</field>'+
'          </shadow>'+
'        </value>'+
'        <value name="H">'+
'          <shadow type="math_number">'+
'            <field name="NUM">100</field>'+
'          </shadow>'+
'        </value>'+
'      </block>'+
'      <block type="mathoperators">'+
'        <field name="OPERATOR">abs</field>'+
'        <value name="NUM">'+
'          <shadow type="math_number">'+
'            <field name="NUM">0</field>'+
'          </shadow>'+
'        </value>'+
'      </block>'+
'      <block type="mathminmax">'+
'        <field name="OPERATOR">min</field>'+
'        <value name="NUM1">'+
'          <shadow type="math_number">'+
'            <field name="NUM">0</field>'+
'          </shadow>'+
'        </value>'+
'        <value name="NUM2">'+
'          <shadow type="math_number">'+
'            <field name="NUM">0</field>'+
'          </shadow>'+
'        </value>'+
'      </block>'+
'      <block type="mathconstrain">'+
'        <value name="X">'+
'          <shadow type="math_number">'+
'            <field name="NUM">0</field>'+
'          </shadow>'+
'        </value>'+
'        <value name="A">'+
'          <shadow type="math_number">'+
'            <field name="NUM">0</field>'+
'          </shadow>'+
'        </value>'+
'        <value name="B">'+
'          <shadow type="math_number">'+
'            <field name="NUM">255</field>'+
'          </shadow>'+
'        </value>'+
'      </block>'+
'      <block type="mathmap">'+
'        <value name="X">'+
'          <shadow type="math_number">'+
'            <field name="NUM">0</field>'+
'          </shadow>'+
'        </value>'+
'        <value name="FL">'+
'          <shadow type="math_number">'+
'            <field name="NUM">0</field>'+
'          </shadow>'+
'        </value>'+
'        <value name="FH">'+
'          <shadow type="math_number">'+
'            <field name="NUM">1023</field>'+
'          </shadow>'+
'        </value>'+
'        <value name="TL">'+
'          <shadow type="math_number">'+
'            <field name="NUM">0</field>'+
'          </shadow>'+
'        </value>'+
'        <value name="TH">'+
'          <shadow type="math_number">'+
'            <field name="NUM">255</field>'+
'          </shadow>'+
'        </value>'+
'      </block>'+
'      <block type="math_boolean_menu"/>'+
'    </category>'+
'    <category name="Variable" colour="#59C059" secondaryColour="#389438" custom="InstanceVariables"/>'+
'    <category name="Modules" colour="#855CD6" secondaryColour="#774DCB" custom="InstanceModule"/>'+
'  </xml>'+
''
var hardwareToolboxXml=
'<xml xmlns="http://www.w3.org/1999/xhtml">'+
'    <category name="Display" colour="#4C97FF" secondaryColour="#3373CC">'+
'      <block type="instance_lcd1602">'+
'        <field name="NAME">lcd1</field>'+
'        <value name="RS">'+
'          <shadow type="io_arduino_uno_pin_usable_menu">'+
'            <data>digital</data>'+
'          </shadow>'+
'        </value>'+
'        <value name="EN">'+
'          <shadow type="io_arduino_uno_pin_usable_menu">'+
'            <data>digital</data>'+
'          </shadow>'+
'        </value>'+
'        <value name="D4">'+
'          <shadow type="io_arduino_uno_pin_usable_menu">'+
'            <data>digital</data>'+
'          </shadow>'+
'        </value>'+
'        <value name="D5">'+
'          <shadow type="io_arduino_uno_pin_usable_menu">'+
'            <data>digital</data>'+
'          </shadow>'+
'        </value>'+
'        <value name="D6">'+
'          <shadow type="io_arduino_uno_pin_usable_menu">'+
'            <data>digital</data>'+
'          </shadow>'+
'        </value>'+
'        <value name="D7">'+
'          <shadow type="io_arduino_uno_pin_usable_menu">'+
'            <data>digital</data>'+
'          </shadow>'+
'        </value>'+
'      </block>'+
'      <block type="instance_rgb">'+
'        <value name="R">'+
'          <shadow type="io_arduino_uno_pin_usable_menu">'+
'            <data>pwm</data>'+
'          </shadow>'+
'        </value>'+
'        <value name="G">'+
'          <shadow type="io_arduino_uno_pin_usable_menu">'+
'            <data>pwm</data>'+
'          </shadow>'+
'        </value>'+
'        <value name="B">'+
'          <shadow type="io_arduino_uno_pin_usable_menu">'+
'            <data>pwm</data>'+
'          </shadow>'+
'        </value>'+
'      </block>'+
'      <block type="instance_led">'+
'        <value name="Pin">'+
'          <shadow type="io_arduino_uno_pin_usable_menu">'+
'            <data>digital</data>'+
'          </shadow>'+
'        </value>'+
'      </block>'+
'    </category>'+
'    <category name="INPUT" colour="#9966FF" secondaryColour="#774DCB">'+
'      <block type="instance_button">'+
'        <value name="Pin">'+
'          <shadow type="io_arduino_uno_pin_usable_menu">'+
'            <data>digital</data>'+
'          </shadow>'+
'        </value>'+
'      </block>'+
'      <block type="instance_pir">'+
'        <value name="Pin">'+
'          <shadow type="io_arduino_uno_pin_usable_menu">'+
'            <data>digital</data>'+
'          </shadow>'+
'        </value>'+
'      </block>'+
'      <block type="instance_potentiometer">'+
'        <value name="Pin">'+
'          <shadow type="io_arduino_uno_pin_usable_menu">'+
'            <data>analog</data>'+
'          </shadow>'+
'        </value>'+
'      </block>'+
'      <block type="instance_slider">'+
'        <value name="Pin">'+
'          <shadow type="io_arduino_uno_pin_usable_menu">'+
'            <data>analog</data>'+
'          </shadow>'+
'        </value>'+
'      </block>'+
'      <block type="instance_lightsensor">'+
'        <value name="Pin">'+
'          <shadow type="io_arduino_uno_pin_usable_menu">'+
'            <data>analog</data>'+
'          </shadow>'+
'        </value>'+
'      </block>'+
'      <block type="instance_lm35">'+
'        <value name="Pin">'+
'          <shadow type="io_arduino_uno_pin_usable_menu">'+
'            <data>analog</data>'+
'          </shadow>'+
'        </value>'+
'      </block>'+
'      <block type="instance_soundsensor">'+
'        <value name="Pin">'+
'          <shadow type="io_arduino_uno_pin_usable_menu">'+
'            <data>analog</data>'+
'          </shadow>'+
'        </value>'+
'      </block>'+
'      <block type="instance_ultrasonic">'+
'        <value name="trigPin">'+
'          <shadow type="io_arduino_uno_pin_usable_menu">'+
'            <data>digital</data>'+
'          </shadow>'+
'        </value>'+
'        <value name="echoPin">'+
'          <shadow type="io_arduino_uno_pin_usable_menu">'+
'            <data>digital</data>'+
'          </shadow>'+
'        </value>'+
'      </block>'+
'      <block type="instance_4dtouch">'+
'        <value name="OUT1">'+
'          <shadow type="io_arduino_uno_pin_usable_menu">'+
'          </shadow>'+
'        </value>'+
'        <value name="OUT2">'+
'          <shadow type="io_arduino_uno_pin_usable_menu">'+
'          </shadow>'+
'        </value>'+
'        <value name="OUT3">'+
'          <shadow type="io_arduino_uno_pin_usable_menu">'+
'          </shadow>'+
'        </value>'+
'        <value name="OUT4">'+
'          <shadow type="io_arduino_uno_pin_usable_menu">'+
'          </shadow>'+
'        </value>'+
'      </block>'+
'      <block type="instance_flame">'+
'        <value name="Pin">'+
'          <shadow type="io_arduino_uno_pin_usable_menu">'+
'            <data>analog</data>'+
'          </shadow>'+
'        </value>'+
'      </block>'+
'      <block type="instance_irdetector">'+
'        <value name="Pin">'+
'          <shadow type="io_arduino_uno_pin_usable_menu">'+
'            <data>digital</data>'+
'          </shadow>'+
'        </value>'+
'      </block>'+
'    </category>'+
'    <category name="OUTPUT" colour="#FFBF00" secondaryColour="#CC9900">'+
'      <block type="instance_buzzer">'+
'        <value name="Pin">'+
'          <shadow type="io_arduino_uno_pin_usable_menu">'+
'            <data>digital</data>'+
'          </shadow>'+
'        </value>'+
'      </block>'+
'      <block type="instance_speaker">'+
'        <value name="Pin">'+
'          <shadow type="io_arduino_uno_pin_usable_menu">'+
'            <data>digital</data>'+
'          </shadow>'+
'        </value>'+
'      </block>'+
'      <block type="instance_fanmotor">'+
'        <value name="INA">'+
'          <shadow type="io_arduino_uno_pin_usable_menu">'+
'            <data>pwm</data>'+
'          </shadow>'+
'        </value>'+
'        <value name="INB">'+
'          <shadow type="io_arduino_uno_pin_usable_menu">'+
'            <data>pwm</data>'+
'          </shadow>'+
'        </value>'+
'      </block>'+
'      <block type="instance_servo">'+
'        <value name="Pin">'+
'          <shadow type="io_arduino_uno_pin_usable_menu">'+
'            <data>pwm</data>'+
'          </shadow>'+
'        </value>'+
'      </block>'+
'      <block type="instance_stepper">'+
'        <value name="Pin1">'+
'          <shadow type="io_arduino_uno_pin_usable_menu">'+
'          </shadow>'+
'        </value>'+
'        <value name="Pin2">'+
'          <shadow type="io_arduino_uno_pin_usable_menu">'+
'          </shadow>'+
'        </value>'+
'        <value name="Pin3">'+
'          <shadow type="io_arduino_uno_pin_usable_menu">'+
'          </shadow>'+
'        </value>'+
'        <value name="Pin4">'+
'          <shadow type="io_arduino_uno_pin_usable_menu">'+
'          </shadow>'+
'        </value>'+
'        <field name="spv">2048</field>'+
'        <field name="rpm">10</field>'+
'      </block>'+
'    </category>'+
'  </xml>'+
''
var ModuleToolboxXml=
'<xml xmlns="http://www.w3.org/1999/xhtml">'+
'    <block type="module_set_rgb">'+
'      <value name="colour">'+
'        <shadow type="colour_picker"/>'+
'      </value>'+
'    </block>'+
'    <block type="rgbtocolor">'+
'      <value name="r">'+
'        <shadow type="math_whole_number">'+
'          <field name="NUM">0</field>'+
'        </shadow>'+
'      </value>'+
'      <value name="g">'+
'        <shadow type="math_whole_number">'+
'          <field name="NUM">0</field>'+
'        </shadow>'+
'      </value>'+
'      <value name="b">'+
'        <shadow type="math_whole_number">'+
'          <field name="NUM">0</field>'+
'        </shadow>'+
'      </value>'+
'    </block>'+
'    <block type="module_set_led">'+
'      <field name="NAME">OPTIONNAME</field>'+
'      <value name="state">'+
'        <shadow type="io_pinstate_menu">'+
'          <field name="state">HIGH</field>'+
'        </shadow>'+
'      </value>'+
'    </block>'+
'    <block type="module_read_button"/>'+
'    <block type="module_lcd_print">'+
'      <value name="value">'+
'        <shadow type="text">'+
'          <field name="TEXT">hello!</field>'+
'        </shadow>'+
'      </value>'+
'    </block>'+
'    <block type="module_lcd_clear"/>'+
'    <block type="module_lcd_goto">'+
'      <value name="column">'+
'        <shadow type="math_whole_number">'+
'          <field name="NUM">0</field>'+
'        </shadow>'+
'      </value>'+
'      <value name="line">'+
'        <shadow type="math_whole_number">'+
'          <field name="NUM">0</field>'+
'        </shadow>'+
'      </value>'+
'    </block>'+
'    <block type="module_set_buzzer">'+
'      <value name="state">'+
'        <shadow type="io_pinstate_menu">'+
'          <field name="state">HIGH</field>'+
'        </shadow>'+
'      </value>'+
'    </block>'+
'    <block type="module_buzzer_playtone">'+
'      <value name="frequency">'+
'        <shadow type="io_tone_menu">'+
'          <field name="Tone">131</field>'+
'        </shadow>'+
'      </value>'+
'    </block>'+
'    <block type="module_buzzer_notone">'+
'    </block>'+
'    <block type="module_set_fanmotor">'+
'      <value name="pwm">'+
'        <shadow type="math_whole_number">'+
'          <field name="NUM">255</field>'+
'        </shadow>'+
'      </value>'+
'    </block>'+
'    <block type="module_servo_write">'+
'      <value name="angle">'+
'        <shadow type="angle_picker">'+
'        </shadow>'+
'      </value>'+
'    </block>'+
'    <block type="module_stepper_move">'+
'      <value name="step">'+
'        <shadow type="math_integer">'+
'          <field name="NUM">1</field>'+
'        </shadow>'+
'      </value>'+
'    </block>'+
'    <block type="module_stepper_speed">'+
'      <value name="speed">'+
'        <shadow type="math_whole_number">'+
'          <field name="NUM">10</field>'+
'        </shadow>'+
'      </value>'+
'    </block>'+
'    <block type="module_pir_get">'+
'    </block>'+
'    <block type="module_potentiometer_get">'+
'    </block>'+
'    <block type="module_slider_get">'+
'    </block>'+
'    <block type="module_lightsensor_get">'+
'    </block>'+
'    <block type="module_lm35_get">'+
'    </block>'+
'    <block type="module_soundsensor_get">'+
'    </block>'+
'    <block type="module_ultrasonic_get">'+
'    </block>'+
'    <block type="module_4dtouch_get">'+
'    </block>'+
'    <block type="module_read_flame">'+
'    </block>'+
'    <block type="module_read_irdetector">'+
'    </block>'+
'  </xml>'+
''
