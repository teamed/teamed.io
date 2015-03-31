module Jekyll
  module Tags
    class Par < Liquid::Tag
      def initialize(tag_name, num, tokens)
        super
        @num = num.strip
      end
      def render(context)
        "<span id='#{@num}' class='par'><a href='##{@num}'>&sect;#{@num}</a></span> "
      end
    end
  end
end

Liquid::Template.register_tag('par', Jekyll::Tags::Par)
