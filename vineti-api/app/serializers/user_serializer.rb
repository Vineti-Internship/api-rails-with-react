class UserSerializer < ActiveModel::Serializer
  has_many :posts
  
  attributes :id, :name, :email, :last_post_id

  def last_post_id
    object&.posts&.last&.id
  end
end
