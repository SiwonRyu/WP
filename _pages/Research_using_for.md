---
layout: default
permalink: /tmp/
---
<!--
<div style="margin-top: 50px;">
</div>
-->

Working Papers
======
{% assign items = "JMP,3YP,2YP" | split: "," %}
{% assign titles = 
"JMP:“Decomposition of Causal Effect Accounting for Network Change” (Job market paper):JMP_detail.md:block
\3YP:“Local Average Treatment Effects with Imperfect Compliance and Interference” (Submitted, <i>Journal of Econometrics</i>):3YP_detail.md:none
\2YP:“Direct and Indirect Treatment Effects with Social Interaction”:2YP_detail.md:none
" | split: "\" %}


{% for item in items %}
    {% for title in titles %}
        {% assign item_title = title | split: ":" %}
        {% if item == item_title[0] %}
        {% assign file_name = item_title[2] | strip %}
        {% capture item_detail %}{% include {{ file_name }} %}{% endcapture %}

        {% comment %}
            item_title[0] assigns the item initial: JMP, 3YP, 2YP
            item_title[1] assigns the paper title
            itme_title[2] assigns the paper details

            To include the md file with name itme_title[2], 
            file_name: the name of md file of paper details
        {% endcomment %}  
<div class="item_container">
    <div class="item_title"> 
        <span class="text">
            {{ item_title[1] }}
        </span>
        <span class="arrow"></span>     
    </div>
    <div class="item_content" style="display:{{ item_title[3] | default: 'none' }};">
        {{ item_detail | markdownify }}
    </div>
</div>
        {% endif %}
    {% endfor %}
{% endfor %}


<div style="margin-top: 50px;">
</div>

Work in Progress
======
{% assign items = "CC" | split: "," %}
{% assign titles = 
"CC;“Heterogeneous Parental Labor Supply Responses to Children’s Severe Health Shocks: Evidence from Administrative Data from South Korea” (with Jungmin Lee and Hyuncheol Bryant Kim);CC_detail.md
" | split: "\" %}


{% for item in items %}
    {% for title in titles %}
        {% assign item_title = title | split: ";" %}
        {% if item == item_title[0] %}
        {% assign file_name = item_title[2] | strip %}
        {% capture item_detail %}{% include {{ file_name }} %}{% endcapture %}
<div class="item_container">
    <div class="item_title"> 
        <span class="text">
            {{ item_title[1] }}
        </span>
        <span class="arrow"></span>     
    </div>
    <div class="item_content" style="display:none">
        {{ item_detail | markdownify }}
    </div>
</div>
        {% endif %}
    {% endfor %}
{% endfor %}
