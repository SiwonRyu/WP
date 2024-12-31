---
layout: pages_with_scroll
title: "Research"
permalink: /research/
---
<!--
<div style="margin-top: 50px;">
</div>
-->

<img src="/assets/images/wp.png" alt="Icon"  class="item_icon">Working Papers
======
<div class="item_container">
    <div class="item_title active"> 
        <span class="arrow"></span>
        <span class="text">
            “Causal Effects of Treatments with Network Changes” <span style="color:#68f;">(Job market paper)</span>
        </span>        
    </div>
    <div class="item_content expanded">
        {% capture my_include %}{% include Research/JMP_detail.md %}{% endcapture %}
            {{ my_include | markdownify }}
    </div>
</div>
<div class="item_container">
    <div class="item_title"> 
        <span class="arrow"></span>
        <span class="text">
            “Local Average Treatment Effects with Imperfect Compliance and Interference” (Under major revision at <i>Journal of Econometrics</i>)
        </span>        
    </div>
    <div class="item_content">
        {% capture my_include %}{% include Research/3YP_detail.md %}{% endcapture %}
            {{ my_include | markdownify }}
    </div>
</div>
<div class="item_container">
    <div class="item_title"> 
        <span class="arrow"></span>
        <span class="text">
            “Causal Mechanism with Interference”
        </span>        
    </div>
    <div class="item_content">
        {% capture my_include %}{% include Research/2YP_detail.md %}{% endcapture %}
            {{ my_include | markdownify }}
    </div>
</div>


<!--
  * Estimation Package: [Stata, Matlab, Python, Julia, R]
  * Simulation: [[Matlab]](https://github.com/SiwonRyu/3YP_Simulation)
  * Empirical Application: [Stata]
-->

<div style="margin-top: 50px;"></div>

<img src="/assets/images/wip.png" alt="Icon"  class="item_icon">Work in Progress
======
<div class="item_container">
    <div class="item_title"> 
        <span class="arrow"></span>     
        <span class="text">
            “Heterogeneous Parental Labor Supply Responses to Children’s Severe Health Shocks: Evidence from Administrative Data from South Korea” (with Jungmin Lee and Hyuncheol Bryant Kim)
        </span>        
    </div>
    <div class="item_content">
        {% capture my_include %}{% include Research/CC_detail.md %}{% endcapture %}
        {{ my_include | markdownify }}
    </div>
</div>


<div class="item_container">
    <div class="item_title"> 
        <span class="arrow"></span>     
        <span class="text">
            “Financial Development and Trade Network Formation” (with Daeeun Bae)
        </span>        
    </div>
    <div class="item_content">
        {% capture my_include %}{% include Research/FN_detail.md %}{% endcapture %}
        {{ my_include | markdownify }}
    </div>
</div>