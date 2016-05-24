<img align="right" height="150" src="./img/colors-cli.png">

# colors-cli


[![](https://jaywcjlove.github.io/sb/ico/npm.svg)](https://www.npmjs.com/package/colors-cli) [![Build Status](https://travis-ci.org/jaywcjlove/colors-cli.svg?branch=master)](https://travis-ci.org/jaywcjlove/colors-cli)

Terminal string styling done right.  ಠ_ಠ 

Install with npm:

```bash
npm install colors-cli --save-dev
```

# Styles

`bold`、 `faint`、 `italic`、 `underline`、 `blink`、 `overline`、 `inverse`、 `conceal`、 `strike`、

# Colors

<table>
  <thead><th>Foreground</th><th>Background</th><th></th><th>Bright Foreground</th><th>Bright Background</th><th></th></thead>
  <tbody>
    <tr>
      <td>black</td><td>black_b</td><td><img src="./img/black.png" width="20" height="20" /></td>
      <td>black_bt</td><td>black_bbt</td><td><img src="./img/black_bright.png" width="20" height="20" /></td>
    </tr>
    <tr>
      <td>red</td><td>red_b</td><td><img src="./img/red.png" width="20" height="20" /></td>
      <td>red_bt</td><td>red_bbt</td><td><img src="./img/red_bright.png" width="20" height="20" /></td>
    </tr>
    <tr>
      <td>green</td><td>green_b</td><td><img src="./img/green.png" width="20" height="20" /></td>
      <td>green_bt</td><td>green_bbt</td><td><img src="./img/green_bright.png" width="20" height="20" /></td>
    </tr>
    <tr>
      <td>yellow</td><td>yellow_b</td><td><img src="./img/yellow.png" width="20" height="20" /></td>
      <td>yellow_bt</td><td>yellow_bbt</td><td><img src="./img/yellow_bright.png" width="20" height="20" /></td>
    </tr>
    <tr>
      <td>blue</td><td>blue_b</td><td><img src="./img/blue.png" width="20" height="20" /></td>
      <td>blue_bt</td><td>blue_bbt</td><td><img src="./img/blue_bright.png" width="20" height="20" /></td>
    </tr>
    <tr>
      <td>magenta</td><td>magenta_b</td><td><img src="./img/magenta.png" width="20" height="20" /></td>
      <td>magenta_bt</td><td>magenta_bbt</td><td><img src="./img/magenta_bright.png" width="20" height="20" /></td>
    </tr>
    <tr>
      <td>cyan</td><td>cyan_b</td><td><img src="./img/cyan.png" width="20" height="20" /></td>
      <td>cyan_bt</td><td>cyan_bbt</td><td><img src="./img/cyan_bright.png" width="20" height="20" /></td>
    </tr>
    <tr>
      <td>white</td><td>white_b</td><td><img src="./img/white.png" width="20" height="20" /></td>
      <td>white_bt</td><td>white_bbt</td><td><img src="./img/white_bright.png" width="20" height="20" /></td>
    </tr>
  </tbody>
</table>

## Basic usage:

Output colored text:

```js
var color = require('colors-cli')
console.log( color.red('hello') )
```

Best way is to predefine needed stylings and then use it:

```js
var error = color.red.bold;
var warn = color.yellow;
var notice = color.blue;
console.log(error('Error!'));
console.log(warn('Warning'));
console.log(notice('Notice'));
```


Styles can be mixed:

```js
var color = require('colors-cli/safe')
console.log( color.red.bold.underline('hello') )
```


```js
require('colors-cli/toxic')
console.log( 'hello'.green );
console.log( 'hello'.green.black_b.underline );
```

# ANSI 256 colors

Support ANSI 256 colors. [0 - 255], The rules of method name. 

 - Foreground `x32` 
 - Background `xb32`

```js
var color = require('colors-cli/safe')
console.log( color.x45.bold.underline('hello') )

require('colors-cli/toxic')
console.log( 'hello'.x23.underline );
console.log( 'hello'.green.xb34.underline );
```

<table><tbody><tr> <td>1</td> <td><img src="./img/x1.png" width="15" height="15"></td> <td>2</td> <td><img src="./img/x2.png" width="15" height="15"></td> <td>3</td> <td><img src="./img/x3.png" width="15" height="15"></td> <td>4</td> <td><img src="./img/x4.png" width="15" height="15"></td> <td>5</td> <td><img src="./img/x5.png" width="15" height="15"></td> <td>6</td> <td><img src="./img/x6.png" width="15" height="15"></td> <td>7</td> <td><img src="./img/x7.png" width="15" height="15"></td> <td>8</td> <td><img src="./img/x8.png" width="15" height="15"></td> <td>9</td> <td><img src="./img/x9.png" width="15" height="15"></td> <td>10</td> <td><img src="./img/x10.png" width="15" height="15"></td> </tr> <tr> <td>11</td> <td><img src="./img/x11.png" width="15" height="15"></td> <td>12</td> <td><img src="./img/x12.png" width="15" height="15"></td> <td>13</td> <td><img src="./img/x13.png" width="15" height="15"></td> <td>14</td> <td><img src="./img/x14.png" width="15" height="15"></td> <td>15</td> <td><img src="./img/x15.png" width="15" height="15"></td> <td>16</td> <td><img src="./img/x16.png" width="15" height="15"></td> <td>17</td> <td><img src="./img/x17.png" width="15" height="15"></td> <td>18</td> <td><img src="./img/x18.png" width="15" height="15"></td> <td>19</td> <td><img src="./img/x19.png" width="15" height="15"></td> <td>20</td> <td><img src="./img/x20.png" width="15" height="15"></td> </tr> <tr> <td>21</td> <td><img src="./img/x21.png" width="15" height="15"></td> <td>22</td> <td><img src="./img/x22.png" width="15" height="15"></td> <td>23</td> <td><img src="./img/x23.png" width="15" height="15"></td> <td>24</td> <td><img src="./img/x24.png" width="15" height="15"></td> <td>25</td> <td><img src="./img/x25.png" width="15" height="15"></td> <td>26</td> <td><img src="./img/x26.png" width="15" height="15"></td> <td>27</td> <td><img src="./img/x27.png" width="15" height="15"></td> <td>28</td> <td><img src="./img/x28.png" width="15" height="15"></td> <td>29</td> <td><img src="./img/x29.png" width="15" height="15"></td> <td>30</td> <td><img src="./img/x30.png" width="15" height="15"></td> </tr> <tr> <td>31</td> <td><img src="./img/x31.png" width="15" height="15"></td> <td>32</td> <td><img src="./img/x32.png" width="15" height="15"></td> <td>33</td> <td><img src="./img/x33.png" width="15" height="15"></td> <td>34</td> <td><img src="./img/x34.png" width="15" height="15"></td> <td>35</td> <td><img src="./img/x35.png" width="15" height="15"></td> <td>36</td> <td><img src="./img/x36.png" width="15" height="15"></td> <td>37</td> <td><img src="./img/x37.png" width="15" height="15"></td> <td>38</td> <td><img src="./img/x38.png" width="15" height="15"></td> <td>39</td> <td><img src="./img/x39.png" width="15" height="15"></td> <td>40</td> <td><img src="./img/x40.png" width="15" height="15"></td> </tr> <tr> <td>41</td> <td><img src="./img/x41.png" width="15" height="15"></td> <td>42</td> <td><img src="./img/x42.png" width="15" height="15"></td> <td>43</td> <td><img src="./img/x43.png" width="15" height="15"></td> <td>44</td> <td><img src="./img/x44.png" width="15" height="15"></td> <td>45</td> <td><img src="./img/x45.png" width="15" height="15"></td> <td>46</td> <td><img src="./img/x46.png" width="15" height="15"></td> <td>47</td> <td><img src="./img/x47.png" width="15" height="15"></td> <td>48</td> <td><img src="./img/x48.png" width="15" height="15"></td> <td>49</td> <td><img src="./img/x49.png" width="15" height="15"></td> <td>50</td> <td><img src="./img/x50.png" width="15" height="15"></td> </tr> <tr> <td>51</td> <td><img src="./img/x51.png" width="15" height="15"></td> <td>52</td> <td><img src="./img/x52.png" width="15" height="15"></td> <td>53</td> <td><img src="./img/x53.png" width="15" height="15"></td> <td>54</td> <td><img src="./img/x54.png" width="15" height="15"></td> <td>55</td> <td><img src="./img/x55.png" width="15" height="15"></td> <td>56</td> <td><img src="./img/x56.png" width="15" height="15"></td> <td>57</td> <td><img src="./img/x57.png" width="15" height="15"></td> <td>58</td> <td><img src="./img/x58.png" width="15" height="15"></td> <td>59</td> <td><img src="./img/x59.png" width="15" height="15"></td> <td>60</td> <td><img src="./img/x60.png" width="15" height="15"></td> </tr> <tr> <td>61</td> <td><img src="./img/x61.png" width="15" height="15"></td> <td>62</td> <td><img src="./img/x62.png" width="15" height="15"></td> <td>63</td> <td><img src="./img/x63.png" width="15" height="15"></td> <td>64</td> <td><img src="./img/x64.png" width="15" height="15"></td> <td>65</td> <td><img src="./img/x65.png" width="15" height="15"></td> <td>66</td> <td><img src="./img/x66.png" width="15" height="15"></td> <td>67</td> <td><img src="./img/x67.png" width="15" height="15"></td> <td>68</td> <td><img src="./img/x68.png" width="15" height="15"></td> <td>69</td> <td><img src="./img/x69.png" width="15" height="15"></td> <td>70</td> <td><img src="./img/x70.png" width="15" height="15"></td> </tr> <tr> <td>71</td> <td><img src="./img/x71.png" width="15" height="15"></td> <td>72</td> <td><img src="./img/x72.png" width="15" height="15"></td> <td>73</td> <td><img src="./img/x73.png" width="15" height="15"></td> <td>74</td> <td><img src="./img/x74.png" width="15" height="15"></td> <td>75</td> <td><img src="./img/x75.png" width="15" height="15"></td> <td>76</td> <td><img src="./img/x76.png" width="15" height="15"></td> <td>77</td> <td><img src="./img/x77.png" width="15" height="15"></td> <td>78</td> <td><img src="./img/x78.png" width="15" height="15"></td> <td>79</td> <td><img src="./img/x79.png" width="15" height="15"></td> <td>80</td> <td><img src="./img/x80.png" width="15" height="15"></td> </tr> <tr> <td>81</td> <td><img src="./img/x81.png" width="15" height="15"></td> <td>82</td> <td><img src="./img/x82.png" width="15" height="15"></td> <td>83</td> <td><img src="./img/x83.png" width="15" height="15"></td> <td>84</td> <td><img src="./img/x84.png" width="15" height="15"></td> <td>85</td> <td><img src="./img/x85.png" width="15" height="15"></td> <td>86</td> <td><img src="./img/x86.png" width="15" height="15"></td> <td>87</td> <td><img src="./img/x87.png" width="15" height="15"></td> <td>88</td> <td><img src="./img/x88.png" width="15" height="15"></td> <td>89</td> <td><img src="./img/x89.png" width="15" height="15"></td> <td>90</td> <td><img src="./img/x90.png" width="15" height="15"></td> </tr> <tr> <td>91</td> <td><img src="./img/x91.png" width="15" height="15"></td> <td>92</td> <td><img src="./img/x92.png" width="15" height="15"></td> <td>93</td> <td><img src="./img/x93.png" width="15" height="15"></td> <td>94</td> <td><img src="./img/x94.png" width="15" height="15"></td> <td>95</td> <td><img src="./img/x95.png" width="15" height="15"></td> <td>96</td> <td><img src="./img/x96.png" width="15" height="15"></td> <td>97</td> <td><img src="./img/x97.png" width="15" height="15"></td> <td>98</td> <td><img src="./img/x98.png" width="15" height="15"></td> <td>99</td> <td><img src="./img/x99.png" width="15" height="15"></td> <td>100</td> <td><img src="./img/x100.png" width="15" height="15"></td> </tr> <tr> <td>101</td> <td><img src="./img/x101.png" width="15" height="15"></td> <td>102</td> <td><img src="./img/x102.png" width="15" height="15"></td> <td>103</td> <td><img src="./img/x103.png" width="15" height="15"></td> <td>104</td> <td><img src="./img/x104.png" width="15" height="15"></td> <td>105</td> <td><img src="./img/x105.png" width="15" height="15"></td> <td>106</td> <td><img src="./img/x106.png" width="15" height="15"></td> <td>107</td> <td><img src="./img/x107.png" width="15" height="15"></td> <td>108</td> <td><img src="./img/x108.png" width="15" height="15"></td> <td>109</td> <td><img src="./img/x109.png" width="15" height="15"></td> <td>110</td> <td><img src="./img/x110.png" width="15" height="15"></td> </tr> <tr> <td>111</td> <td><img src="./img/x111.png" width="15" height="15"></td> <td>112</td> <td><img src="./img/x112.png" width="15" height="15"></td> <td>113</td> <td><img src="./img/x113.png" width="15" height="15"></td> <td>114</td> <td><img src="./img/x114.png" width="15" height="15"></td> <td>115</td> <td><img src="./img/x115.png" width="15" height="15"></td> <td>116</td> <td><img src="./img/x116.png" width="15" height="15"></td> <td>117</td> <td><img src="./img/x117.png" width="15" height="15"></td> <td>118</td> <td><img src="./img/x118.png" width="15" height="15"></td> <td>119</td> <td><img src="./img/x119.png" width="15" height="15"></td> <td>120</td> <td><img src="./img/x120.png" width="15" height="15"></td> </tr> <tr> <td>121</td> <td><img src="./img/x121.png" width="15" height="15"></td> <td>122</td> <td><img src="./img/x122.png" width="15" height="15"></td> <td>123</td> <td><img src="./img/x123.png" width="15" height="15"></td> <td>124</td> <td><img src="./img/x124.png" width="15" height="15"></td> <td>125</td> <td><img src="./img/x125.png" width="15" height="15"></td> <td>126</td> <td><img src="./img/x126.png" width="15" height="15"></td> <td>127</td> <td><img src="./img/x127.png" width="15" height="15"></td> <td>128</td> <td><img src="./img/x128.png" width="15" height="15"></td> <td>129</td> <td><img src="./img/x129.png" width="15" height="15"></td> <td>130</td> <td><img src="./img/x130.png" width="15" height="15"></td> </tr> <tr> <td>131</td> <td><img src="./img/x131.png" width="15" height="15"></td> <td>132</td> <td><img src="./img/x132.png" width="15" height="15"></td> <td>133</td> <td><img src="./img/x133.png" width="15" height="15"></td> <td>134</td> <td><img src="./img/x134.png" width="15" height="15"></td> <td>135</td> <td><img src="./img/x135.png" width="15" height="15"></td> <td>136</td> <td><img src="./img/x136.png" width="15" height="15"></td> <td>137</td> <td><img src="./img/x137.png" width="15" height="15"></td> <td>138</td> <td><img src="./img/x138.png" width="15" height="15"></td> <td>139</td> <td><img src="./img/x139.png" width="15" height="15"></td> <td>140</td> <td><img src="./img/x140.png" width="15" height="15"></td> </tr> <tr> <td>141</td> <td><img src="./img/x141.png" width="15" height="15"></td> <td>142</td> <td><img src="./img/x142.png" width="15" height="15"></td> <td>143</td> <td><img src="./img/x143.png" width="15" height="15"></td> <td>144</td> <td><img src="./img/x144.png" width="15" height="15"></td> <td>145</td> <td><img src="./img/x145.png" width="15" height="15"></td> <td>146</td> <td><img src="./img/x146.png" width="15" height="15"></td> <td>147</td> <td><img src="./img/x147.png" width="15" height="15"></td> <td>148</td> <td><img src="./img/x148.png" width="15" height="15"></td> <td>149</td> <td><img src="./img/x149.png" width="15" height="15"></td> <td>150</td> <td><img src="./img/x150.png" width="15" height="15"></td> </tr> <tr> <td>151</td> <td><img src="./img/x151.png" width="15" height="15"></td> <td>152</td> <td><img src="./img/x152.png" width="15" height="15"></td> <td>153</td> <td><img src="./img/x153.png" width="15" height="15"></td> <td>154</td> <td><img src="./img/x154.png" width="15" height="15"></td> <td>155</td> <td><img src="./img/x155.png" width="15" height="15"></td> <td>156</td> <td><img src="./img/x156.png" width="15" height="15"></td> <td>157</td> <td><img src="./img/x157.png" width="15" height="15"></td> <td>158</td> <td><img src="./img/x158.png" width="15" height="15"></td> <td>159</td> <td><img src="./img/x159.png" width="15" height="15"></td> <td>160</td> <td><img src="./img/x160.png" width="15" height="15"></td> </tr> <tr> <td>161</td> <td><img src="./img/x161.png" width="15" height="15"></td> <td>162</td> <td><img src="./img/x162.png" width="15" height="15"></td> <td>163</td> <td><img src="./img/x163.png" width="15" height="15"></td> <td>164</td> <td><img src="./img/x164.png" width="15" height="15"></td> <td>165</td> <td><img src="./img/x165.png" width="15" height="15"></td> <td>166</td> <td><img src="./img/x166.png" width="15" height="15"></td> <td>167</td> <td><img src="./img/x167.png" width="15" height="15"></td> <td>168</td> <td><img src="./img/x168.png" width="15" height="15"></td> <td>169</td> <td><img src="./img/x169.png" width="15" height="15"></td> <td>170</td> <td><img src="./img/x170.png" width="15" height="15"></td> </tr> <tr> <td>171</td> <td><img src="./img/x171.png" width="15" height="15"></td> <td>172</td> <td><img src="./img/x172.png" width="15" height="15"></td> <td>173</td> <td><img src="./img/x173.png" width="15" height="15"></td> <td>174</td> <td><img src="./img/x174.png" width="15" height="15"></td> <td>175</td> <td><img src="./img/x175.png" width="15" height="15"></td> <td>176</td> <td><img src="./img/x176.png" width="15" height="15"></td> <td>177</td> <td><img src="./img/x177.png" width="15" height="15"></td> <td>178</td> <td><img src="./img/x178.png" width="15" height="15"></td> <td>179</td> <td><img src="./img/x179.png" width="15" height="15"></td> <td>180</td> <td><img src="./img/x180.png" width="15" height="15"></td> </tr> <tr> <td>181</td> <td><img src="./img/x181.png" width="15" height="15"></td> <td>182</td> <td><img src="./img/x182.png" width="15" height="15"></td> <td>183</td> <td><img src="./img/x183.png" width="15" height="15"></td> <td>184</td> <td><img src="./img/x184.png" width="15" height="15"></td> <td>185</td> <td><img src="./img/x185.png" width="15" height="15"></td> <td>186</td> <td><img src="./img/x186.png" width="15" height="15"></td> <td>187</td> <td><img src="./img/x187.png" width="15" height="15"></td> <td>188</td> <td><img src="./img/x188.png" width="15" height="15"></td> <td>189</td> <td><img src="./img/x189.png" width="15" height="15"></td> <td>190</td> <td><img src="./img/x190.png" width="15" height="15"></td> </tr> <tr> <td>191</td> <td><img src="./img/x191.png" width="15" height="15"></td> <td>192</td> <td><img src="./img/x192.png" width="15" height="15"></td> <td>193</td> <td><img src="./img/x193.png" width="15" height="15"></td> <td>194</td> <td><img src="./img/x194.png" width="15" height="15"></td> <td>195</td> <td><img src="./img/x195.png" width="15" height="15"></td> <td>196</td> <td><img src="./img/x196.png" width="15" height="15"></td> <td>197</td> <td><img src="./img/x197.png" width="15" height="15"></td> <td>198</td> <td><img src="./img/x198.png" width="15" height="15"></td> <td>199</td> <td><img src="./img/x199.png" width="15" height="15"></td> <td>200</td> <td><img src="./img/x200.png" width="15" height="15"></td> </tr> <tr> <td>201</td> <td><img src="./img/x201.png" width="15" height="15"></td> <td>202</td> <td><img src="./img/x202.png" width="15" height="15"></td> <td>203</td> <td><img src="./img/x203.png" width="15" height="15"></td> <td>204</td> <td><img src="./img/x204.png" width="15" height="15"></td> <td>205</td> <td><img src="./img/x205.png" width="15" height="15"></td> <td>206</td> <td><img src="./img/x206.png" width="15" height="15"></td> <td>207</td> <td><img src="./img/x207.png" width="15" height="15"></td> <td>208</td> <td><img src="./img/x208.png" width="15" height="15"></td> <td>209</td> <td><img src="./img/x209.png" width="15" height="15"></td> <td>210</td> <td><img src="./img/x210.png" width="15" height="15"></td> </tr> <tr> <td>211</td> <td><img src="./img/x211.png" width="15" height="15"></td> <td>212</td> <td><img src="./img/x212.png" width="15" height="15"></td> <td>213</td> <td><img src="./img/x213.png" width="15" height="15"></td> <td>214</td> <td><img src="./img/x214.png" width="15" height="15"></td> <td>215</td> <td><img src="./img/x215.png" width="15" height="15"></td> <td>216</td> <td><img src="./img/x216.png" width="15" height="15"></td> <td>217</td> <td><img src="./img/x217.png" width="15" height="15"></td> <td>218</td> <td><img src="./img/x218.png" width="15" height="15"></td> <td>219</td> <td><img src="./img/x219.png" width="15" height="15"></td> <td>220</td> <td><img src="./img/x220.png" width="15" height="15"></td> </tr> <tr> <td>221</td> <td><img src="./img/x221.png" width="15" height="15"></td> <td>222</td> <td><img src="./img/x222.png" width="15" height="15"></td> <td>223</td> <td><img src="./img/x223.png" width="15" height="15"></td> <td>224</td> <td><img src="./img/x224.png" width="15" height="15"></td> <td>225</td> <td><img src="./img/x225.png" width="15" height="15"></td> <td>226</td> <td><img src="./img/x226.png" width="15" height="15"></td> <td>227</td> <td><img src="./img/x227.png" width="15" height="15"></td> <td>228</td> <td><img src="./img/x228.png" width="15" height="15"></td> <td>229</td> <td><img src="./img/x229.png" width="15" height="15"></td> <td>230</td> <td><img src="./img/x230.png" width="15" height="15"></td> </tr> <tr> <td>231</td> <td><img src="./img/x231.png" width="15" height="15"></td> <td>232</td> <td><img src="./img/x232.png" width="15" height="15"></td> <td>233</td> <td><img src="./img/x233.png" width="15" height="15"></td> <td>234</td> <td><img src="./img/x234.png" width="15" height="15"></td> <td>235</td> <td><img src="./img/x235.png" width="15" height="15"></td> <td>236</td> <td><img src="./img/x236.png" width="15" height="15"></td> <td>237</td> <td><img src="./img/x237.png" width="15" height="15"></td> <td>238</td> <td><img src="./img/x238.png" width="15" height="15"></td> <td>239</td> <td><img src="./img/x239.png" width="15" height="15"></td> <td>240</td> <td><img src="./img/x240.png" width="15" height="15"></td> </tr> <tr> <td>241</td> <td><img src="./img/x241.png" width="15" height="15"></td> <td>242</td> <td><img src="./img/x242.png" width="15" height="15"></td> <td>243</td> <td><img src="./img/x243.png" width="15" height="15"></td> <td>244</td> <td><img src="./img/x244.png" width="15" height="15"></td> <td>245</td> <td><img src="./img/x245.png" width="15" height="15"></td> <td>246</td> <td><img src="./img/x246.png" width="15" height="15"></td> <td>247</td> <td><img src="./img/x247.png" width="15" height="15"></td> <td>248</td> <td><img src="./img/x248.png" width="15" height="15"></td> <td>249</td> <td><img src="./img/x249.png" width="15" height="15"></td> <td>250</td> <td><img src="./img/x250.png" width="15" height="15"></td> </tr> <tr> <td>251</td> <td><img src="./img/x251.png" width="15" height="15"></td> <td>252</td> <td><img src="./img/x252.png" width="15" height="15"></td> <td>253</td> <td><img src="./img/x253.png" width="15" height="15"></td> <td>254</td> <td><img src="./img/x254.png" width="15" height="15"></td> <td>255</td> <td><img src="./img/x255.png" width="15" height="15"></td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> </tr></tbody></table>


### Use the command line

```bash
 Usage: colors

 Options:

   --black  => black
   --black_b  => black_b
   --red  => red
   ...

 Examples:

   colors --red "\nhello world" --bold,underline,yellow "wcj"
   colors --green,bold "\nhello world"
   colors --x12,bold "hello world"

```


# Reference

- [The opaque named colors](https://drafts.csswg.org/css-color/#named-colors)
- [ANSI escape code](https://en.wikipedia.org/wiki/ANSI_escape_code)


The [ANSI Escape](https://en.wikipedia.org/wiki/ANSI_escape_code) sequences control code screen.

```
echo -e "\033[31;41;4m something here 33[0m"
```

`\033` As the escape character, inform the terminal to switch to the escape mode.  
`[` The beginning of the CSI.  
`m` Make the action to be performed.  
`;` ASCII code separator.  